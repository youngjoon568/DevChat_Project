import mysql from "serverless-mysql";

export type QueryResult<T> = T[] | { error: any };

export type QueryParams<T> = {
    query: string;
    values?: T[];
};

const db = mysql({
    config: {
        host: "localhost",
        port: 3306,
        database: "devchat",
        user: "root",
        password: "6475",
    },
});

export default async function query<T>({
    query,
    values,
}: QueryParams<T>): Promise<QueryResult<T>> {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results as QueryResult<T>;
    } catch (error) {
        return { error };
    };
};