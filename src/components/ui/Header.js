"use client";
import { Image, Card } from "@nextui-org/react";

export default function Header() {
  return (
    <header>
      <Card className="pl-2 rounded-none">
        <div>
          <Image
            width={150}
            alt="Reconextlogo"
            src={"/Reconext-logo-1.png"}
            className="block"
          />
        </div>
      </Card>
    </header>
  );
}
