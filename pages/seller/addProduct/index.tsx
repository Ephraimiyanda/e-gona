import { Button, Card, Input, Spacer } from "@nextui-org/react";
import React from "react";
import Footer from "@/components/footer";
import bag from "public/bag.svg";
import Image from "next/image";
import Sidebar from "@/components/sidebar";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
      >
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Card className=" mt-10">
            <div className="p-4">
              <div className="flex items-center">
                <Image
                  src={bag}
                  alt="logo"
                  width={35}
                  height={45}
                  className="mr-2"
                />
                <h1 className="font-bold text-2xl">Add Products</h1>
              </div>
              <Spacer y={2} />

              <Spacer y={20} />
            </div>
          </Card>
        </div>
      </div>
      <Spacer y={10} />
      <Footer />
    </div>
  );
};

export default Dashboard;
