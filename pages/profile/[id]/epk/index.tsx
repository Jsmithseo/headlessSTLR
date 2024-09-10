import React from "react";
import EpkForm from "../../../../components/Forms/epkForm";
import { ChevronLeft } from "lucide-react";
import Button from "../../../../components/button";
import axios from "axios";
import { useRouter } from "next/router";

export default function EPK() {
  const router = useRouter();
  const { id } = router.query;

  async function fetchEpk() {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/electronic-package-kits",
        { userId: id }
      );
    } catch (error) {
      console.log(error);
    }
  }
  fetchEpk();
  return (
    <div className="w-screen h-screen flex flex-col gap-12 items-center ">
      <header className="w-full p-14">
        <Button className="flex flex-row gap-2 bg-gray-300">
          <ChevronLeft />
          Back
        </Button>
      </header>
      <EpkForm />
    </div>
  );
}
