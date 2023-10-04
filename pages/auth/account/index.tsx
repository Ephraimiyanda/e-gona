import { Button, Card, Input, Spacer } from "@nextui-org/react";
import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { MailIcon } from "@/components/mailIcon";
import ioslogo from "public/ios store.svg";
import googleplay from "public/google play.svg";

const Account: React.FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card>
          <div className="bg-white px-6 py-4 rounded-xl">
            <div className="my-4"></div>
            <Spacer y={16} />
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
