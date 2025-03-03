import { DataTable } from "@/components/table/DataTable";
import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { columns, Payment } from "@/components/table/columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const Admin = async () => {
  const data = await getData();
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={162}
            height={32}
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={32}
            label="Scheduled appointments"
            icon="assets/icons/appointments.svg"
          />

          <StatCard
            type="pending"
            count={54}
            label="Pending appointments"
            icon="assets/icons/pending.svg"
          />

          <StatCard
            type="cancelled"
            count={45}
            label="Cancelled appointments"
            icon="assets/icons/cancelled.svg"
          />
        </section>

        {/* <DataTable
          columns={columns}
          // @ts-ignore
          data={appointments.documents}
        /> */}

        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
};

export default Admin;
