import { User } from "@/context/UserContext";
import bcrypt from "bcrypt";
import query from "@/lib/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ message: string } | { success: true; user: User }>) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "값을 입력해 주세요."});
        };

        try {
            const rows = await query<User>({
                query: "SELECT id, email, password, username FROM users WHERE email = ?",
                values: [email],
            });

            if (Array.isArray(rows)) {
                if (rows.length === 0) {
                    return res.status(404).json({ message: "존재하지 않는 이메일입니다." });
                };

                const user = rows[0];

                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {
                    return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
                };

                return res.status(200).json({ success: true, user });
            };
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        };
    } else {
        res.status(405).json({ message: "허용되지 않는 메소드입니다." });
    };
};