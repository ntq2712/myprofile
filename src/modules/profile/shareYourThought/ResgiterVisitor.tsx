/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { regiterVisitor } from "@/api/auth";
import { deleteImage } from "@/api/file";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import ImageUploader, {
  ImageUploaderRef,
} from "@/components/common/atomic/input/ImageUploader";
import useAppForm from "@/react-form/formContext";
import { resgiterVisitorOtp } from "@/react-form/formOpts/resgiterVisitor";
import { useRef, useState } from "react";
import z from "zod";

const loginSchema = z.object({
  account: z.string().min(5, "Required minimum 5 characters"),
  password: z.string().min(5, "Required minimum 5 characters"),
  fullName: z.string().min(1, "Required"),
  companyName: z.string().min(1, "Required"),
  positionTitle: z.string().min(1, "Required"),
});

function ResgiterVisitor({ backToLogin }: { backToLogin: () => void }) {
  const uploaderRef = useRef<ImageUploaderRef>(null);
  const [urlHassError, setUrlHassError] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hookForm = useAppForm({
    ...resgiterVisitorOtp,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      const url = await uploaderRef.current?.upload();

      if (!url) {
        setUrlHassError(true);

        return;
      }

      regiterVisitor({ ...value, avatar: url }).then((res) => {
        if (res.status === 200) {
          backToLogin();
          setHasError(true);
        } else {
          setHasError(true);
          const name = url.split("/").pop();
          if (name) deleteImage(name);
        }
      });
    },
  });

  return (
    <>
      <h1 className="text-xl font-ibm font-semibold">Resgiter Visitor</h1>
      <form
        className="flex flex-col items-center w-full"
        method="POST"
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();

          hookForm.handleSubmit();
        }}
      >
        <div className="flex flex-col gap-4 mb-6 w-full">
          <div className="grid grid-cols-4">
            <div className="col-span-2 flex flex-col gap-4">
              <hookForm.AppField name="fullName">
                {(field) => (
                  <field.TextField
                    label="Your Name"
                    placeholder="Your name"
                    inputType="text"
                  />
                )}
              </hookForm.AppField>
              <hookForm.AppField name="companyName">
                {(field) => (
                  <field.TextField
                    label="Your Company"
                    placeholder="Your Company"
                    inputType="text"
                  />
                )}
              </hookForm.AppField>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center">
              <ImageUploader ref={uploaderRef} />
              {urlHassError && (
                <em className="text-red-500 text-xs">Required</em>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 flex flex-col gap-4">
              <hookForm.AppField name="positionTitle">
                {(field) => (
                  <field.TextField
                    label="Your Position Title"
                    placeholder="Your Position Title"
                    inputType="text"
                  />
                )}
              </hookForm.AppField>
              <hookForm.AppField name="account">
                {(field) => (
                  <field.TextField
                    label="Your Account"
                    placeholder="Your Accout"
                    inputType="text"
                  />
                )}
              </hookForm.AppField>
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <hookForm.AppField name="password">
                {(field) => (
                  <field.TextField
                    label="Your Password"
                    placeholder="Your Password"
                    inputType="text"
                  />
                )}
              </hookForm.AppField>
              <hookForm.AppField name="email">
                {(field) => (
                  <field.TextField
                    label="Your Email"
                    placeholder="Your Email"
                    inputType="text"
                  />
                )}
              </hookForm.AppField>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <PrimaryButon type="submit">Submit</PrimaryButon>
          {hasError && <em className="text-red-500 text-xs">Fail something</em>}
        </div>
      </form>
    </>
  );
}

export default ResgiterVisitor;
