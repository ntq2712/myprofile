/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import React, { useEffect } from "react";
import PrimaryButon from "../../components/common/atomic/button/PrimaryButon";
import Link from "next/link";
import { getProfile } from "@/api/profile";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Introduction() {
  const router = useRouter()
  const [info, setInfor] = useState<Information | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getProfile()
      .then((res) => {
        setInfor(res.data);
      })
      .catch(() => {});
  };

  return (
    <div className="w-full bg-black flex flex-col items-center justify-center">
      <div className="w-[80vw] h-[100vh] grid grid-rows-10">
        <div className="row-span-8 grid grid-cols-10 pt-[100px] items-center justify-center">
          <div className="col-span-6 gap-8 flex items-left flex-col">
            <h1 className="text-[32px] text-light font-ibm">
              {info?.fullName ?? ""}
            </h1>
            <div className="text-[14px] text-primary font-ibm">
              {info?.introduction ?? ""}
            </div>
            <PrimaryButon onClick={() => router.push('/share-your-thuoghts')}>Share your thoughts</PrimaryButon>
          </div>
          <div className="col-span-4 flex items-center justify-center">
            {info?.avatar && (
              <div
                className="relative rounded-full overflow-hidden
    sm:w-[200px] sm:h-[200px]
    md:w-[300px] md:h-[300px]
    lg:w-[350px] lg:h-[350px]
    xl:w-[400px] xl:h-[400px]
    2xl:w-[480px] 2xl:h-[480px]"
              >
                <Image
                  src={info?.avatar ?? ""}
                  alt="Nguyen Trong Qui"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
        <div className="row-span-2 flex flex-col gap-5">
          <div className="text-light font-ibm text-2xl">Work Skills</div>
          <div className="flex flex-row flex-wrap gap-4">
            {info &&
              info.mySkills.map((skill) => (
                <div
                  key={skill.name}
                  className="cursor-pointer border border-solid border-stroke rounded-2xl pt-4 pb-4 pl-6 pr-6 text-primary"
                >
                  <Link href={skill.link} target="_blank">
                    {skill.name}
                  </Link>
                </div>
              ))}

            {/* <div className="border border-solid border-stroke rounded-2xl pt-4 pb-4 pl-6 pr-6 text-primary">
              React Native
            </div>
            <div className="border border-solid border-stroke rounded-2xl pt-4 pb-4 pl-6 pr-6 text-primary">
              NextJS
            </div>
            <div className="border border-solid border-stroke rounded-2xl pt-4 pb-4 pl-6 pr-6 text-primary">
              .Net Core
            </div>
            <div className="border border-solid border-stroke rounded-2xl pt-4 pb-4 pl-6 pr-6 text-primary">
              Swift
            </div>
            <div className="border border-solid border-stroke rounded-2xl pt-4 pb-4 pl-6 pr-6 text-primary">
              Kotlin
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
