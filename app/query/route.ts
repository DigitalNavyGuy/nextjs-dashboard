// import postgres from "postgres";

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// async function listInvoices() {
//   const data = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

//   return data;
// }

// export async function GET() {
//   return;
//   try {
//     return Response.json(await listInvoices());
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listInvoices() {
  return await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
}

export async function GET() {
  try {
    const invoices = await listInvoices();
    return Response.json({ invoices });
  } catch (error) {
    console.error("Database query error:", error);
    return Response.json({ error: error }, { status: 500 });
  }
}
