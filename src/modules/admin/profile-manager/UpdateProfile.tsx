/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getProfile, updateProfile } from "@/api/profile";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import ImageUploader, {
  ImageUploaderRef,
} from "@/components/common/atomic/input/ImageUploader";
import Input from "@/components/common/atomic/input/Input";
import useAppForm from "@/react-form/formContext";
import { profileOpt } from "@/react-form/formOpts/profile";
import { useMutation, useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useRef } from "react";
import { FaMinus } from "react-icons/fa";

function UpdateProfile() {
  const uploaderRef = useRef<ImageUploaderRef>(null);

  const form = useAppForm({
    ...profileOpt,
    validators: {},
    onSubmit: async ({ value }) => {
      const url = await uploaderRef.current?.upload();

      updateProfileMutaition.mutateAsync({...value, avatar: url});
    },
  });

  const { data } = useQuery({
    queryKey: [apiUrl.profile.get, "update"],
    queryFn: () => getProfile()
      .then((res) => {
        if (res.data) {
          const data = res.data;

          const birthDay = moment(data.birthDay).format("YYYY-MM-DD");

          // console.log("birthDay:", birthDay);

          form.setFieldValue("fullName", data.fullName);
          form.setFieldValue("birthDay", birthDay);
          form.setFieldValue("introduction", data.introduction);
          form.setFieldValue("mySkills", data.mySkills);
        }

        return res.data;
      })
      .catch(() => {}),
  });

  const updateProfileMutaition = useMutation({
    mutationFn: (body: Record<string, unknown>) => updateProfile(body),
  });

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <h1>My Profile</h1>

      <form
        className="w-full h-fit flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          form.handleSubmit();
        }}
      >
        <div className="grid grid-cols-10 gap-6 w-full">
          <div className="col-span-6 w-full flex flex-col gap-4">
            <form.AppField name="fullName">
              {(field) => (
                <field.TextField label="Full Name" inputType="text" />
              )}
            </form.AppField>

            <form.AppField name="birthDay">
              {(field) => <field.TextField label="Birtday" inputType="date" />}
            </form.AppField>

            <form.AppField name="introduction">
              {(field) => <field.TextAreField label="Introduction" rows={4} />}
            </form.AppField>
          </div>

          <div className="col-span-4 w-full">
            <ImageUploader ref={uploaderRef} imageUrl={data?.avatar}/>
          </div>
        </div>
        <div className="w-full ">
          <form.Field name="mySkills" mode="array">
            {(field) => (
              <div className="grid grid-cols-10 gap-4">
                {field.state.value.map((skill, i) => (
                  <div key={`${i}`} className="col-span-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-start gap-1">
                      <button
                        onClick={() => field.removeValue(i)}
                        type="button"
                      >
                        <FaMinus className="text-red-700" />
                      </button>
                      <div>Skill {i + 1}</div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <form.Field name={`mySkills[${i}].name`}>
                        {(subField) => (
                          <label>
                            <div>Name</div>
                            <Input
                              value={subField.state.value}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                            />
                          </label>
                        )}
                      </form.Field>
                      <form.Field name={`mySkills[${i}].link`}>
                        {(subField) => (
                          <label>
                            <div>Link</div>
                            <Input
                              value={subField.state.value}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                            />
                          </label>
                        )}
                      </form.Field>
                      <form.Field name={`mySkills[${i}].image`}>
                        {(subField) => (
                          <label>
                            <div>Image</div>
                            <Input
                              value={subField.state.value}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                            />
                          </label>
                        )}
                      </form.Field>
                    </div>
                  </div>
                ))}
                <div className="col-span-10 flex flex-row items-center justify-center">
                  <button
                    className="font-ibm border border-orange-300 rounded-md w-28 h-12"
                    onClick={() =>
                      field.pushValue({ name: "", image: "", link: "" })
                    }
                    type="button"
                  >
                    Add Skill
                  </button>
                </div>
              </div>
            )}
          </form.Field>
        </div>
        <div className="w-full flex items-center justify-center">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <PrimaryButon type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </PrimaryButon>
            )}
          </form.Subscribe>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
