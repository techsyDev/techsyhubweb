"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import CustomersTable from "@/components/Management/CustomersTable";
import TeamsTable from "@/components/Management/TeamsTable";
import InquiriesTable from "@/components/Management/InquiriesTable";
import CMS from "@/components/Management/CMS";
import Notifications from "@/components/Management/Notifications";
import Settings from "@/components/Management/Settings";
import User from "@/components/Management/User";
import AddMember from "@/components/Management/AddMember";
import AddCustomer from "@/components/Management/AddCustomer";
import Inquiry from "@/components/Management/Inquiry";

const page = () => {
  const router = useSearchParams();
  const route = router.get("route");
  return (
    <>
      {route === "customers" ? (
        <CustomersTable title={route} />
      ) : route === "team" ? (
        <TeamsTable title={route} />
      ) : route === "inquiries" ? (
        <InquiriesTable title={route} />
      ) : route === "cms" ? (
        <CMS title={route} />
      ) : route === "notifications" ? (
        <Notifications title={route} />
      ) : route === "settings" ? (
        <Settings title={route} />
      ) : route === "user" ? (
        <User title={route} />
      ) : route === "add member" ? (
        <AddMember title={route} />
      ) : route === "add customer" ? (
        <AddCustomer title={route} />
      ) : route === "inquiry" ? (
        <Inquiry title={route} />
      ) : (
        route
      )}
    </>
  );
};

export default page;
