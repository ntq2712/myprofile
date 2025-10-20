/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

"use client";

import { signInVisitor } from "@/api/auth";
import TextAre from "@/components/common/atomic/input/TextAre";
import { Avatar } from "antd";
import { useState } from "react";
import LoginVisitor from "./shareYourThought/LoginVisitor";
import { ILogin } from "@/react-form/formOpts/login";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import { useMutation } from "@tanstack/react-query";
import { createTestimonial } from "@/api/testimonials";

function ShareYourThuoght() {
  const [visitor, setVisitor] = useState<Visitor | undefined>(undefined);
  const [thought, setThought] = useState<string>("");

  const onLogin = (value: ILogin) => {
    signInVisitor(value).then((res) => {
      if (res.status === 200) {
        if (res.status === 200) {
          setVisitor(res.data);
        }
      }
    });
  };

  const createTestimonialMutation = useMutation({
    mutationFn: (body: unknown) => createTestimonial(body),
    onSuccess() {
      setThought("");
    },
  });

  const onSubmit = () => {
    if (visitor?.id && thought) {
      createTestimonialMutation.mutateAsync({
        content: thought,
        userId: visitor.id,
      });
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="w-3/4">
        <div className="flex flex-col items-center justify-start gap-1">
          <h1 className="text-3xl font-ibm font-semibold">
            Share Your Thuoght
          </h1>
          <p className="text-md font-ibm text-center">
            Thank you for sharing your thoughts and experiences. I truly
            appreciate your valuable feedback and support — it helps me grow and
            continue striving for excellence.
          </p>
        </div>
        <div className="grid grid-cols-10 w-full gap-8 mt-8">
          <div className="col-span-5 flex flex-col gap-4">
            {!visitor ? (
              <LoginVisitor onLogin={onLogin} />
            ) : (
              <div className="w-full h-fit flex flex-col items-center justify-center gap-8">
                <p className="text-xl font-ibm font-semibold"> Visitor</p>
                <div className="grid grid-cols-10">
                  <div className="col-span-5 flex flex-col gap-4">
                    <div>
                      <p className="text-sm font-ibm font-semibold">
                        Your Name
                      </p>
                      <p className="text-sm font-ibm">{visitor.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-ibm font-semibold">
                        Your Company
                      </p>
                      <p className="text-sm font-ibm">{visitor.companyName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-ibm font-semibold">
                        Your Position Title
                      </p>
                      <p className="text-sm font-ibm">
                        {visitor.positionTitle}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-4 flex items-center justify-center">
                    <div className="border h-fit w-fit rounded-full border-gray-400 p-1">
                      <Avatar
                        size={200}
                        src={
                          visitor.avatar ??
                          "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-span-5 border-l-black/20 border-l-[1px] pl-8 gap-3 flex flex-col items-center justify-start">
            <p className="text-xl font-ibm font-semibold">Your Thuoghts</p>
            <TextAre
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              className="min-h-64 w-full"
            />

            {visitor && thought && <PrimaryButon onClick={onSubmit}>Submit</PrimaryButon>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareYourThuoght;
