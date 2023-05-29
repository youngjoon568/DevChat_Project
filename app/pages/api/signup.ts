import { User } from "@/context/UserContext";
import bcrypt from "bcrypt";
import query from "@/lib/db";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ message: string } | { success: true }>) {
    if (req.method === "POST") {
        const { email, password, name } = req.body;

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        if (!email || !password || !name) {
            return res.status(400).json({ message: "값을 입력해 주세요."});
        };

        try {
            const rows = await query<User>({
                query: "SELECT id FROM users WHERE email = ?",
                values: [email],
            });

            if (Array.isArray (rows)) {
                if (rows.length > 0) {
                    return res.status(409).json({ message: "이미 사용중인 이메일입니다." });
                };
            };

            await query({
                query: "INSERT INTO users (email, password, username, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
                values: [email, hashedPassword, name, new Date(), new Date()],
            });
            
            return res.status(201).json({ message: `${email} 회원가입이 완료되었습니다.` });
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        };
    } else {
        res.status(405).json({ message: "허용되지 않는 메소드입니다." });
    };
};