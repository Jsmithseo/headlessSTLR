import React from "react";
import { useForm } from "react-hook-form";
import Input from "../FormElements/Input";
import TextArea from "../FormElements/TextArea";

import { Textarea } from "../ui/textarea";
function EpkForm() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const processForm = (data) => {
    const EpkForm = {
      bio: data.bio,
      discovery: data.discovery,
      streamingPlatforms: {
        appleMusic: data.appleMusic,
        spotify: data.spotify,
        soundCloud: data.soundCloud,
        youtube: data.youtube,
      },
      contact: {
        email: data.email,
        number: data.number,
        website: data.website,
      },
    };
    console.log(EpkForm);
  };
  return (
    <div className="w-full flex items-center self-center">
      <form onSubmit={handleSubmit(processForm)}>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            type="text"
            rows={3}
            cols={40}
            placeholder="bio"
            {...register("bio", { required: true })}
            className="flex h-10 w-full items-center overflow-clip rounded-lg border border-gray-200 text-base outline duration-150 outline-none bg-gray-100"
            errors={errors}
          />
        </div>
        <div>
          <Input
            label="Discovery"
            name="discovery"
            type="text"
            placeholder="Discovery"
            register={register}
            errors={errors}
          />
        </div>
        <div id="streaming-platforms">
          <span htmlFor="streaming-platforms">Streaming platforms</span>
          <div className="flex flex-row gap-5">
            <Input
              name="appleMusic"
              type="url"
              placeholder="apple-music"
              register={register}
              errors={errors}
            />
            <Input
              name="spotify"
              type="url"
              placeholder="spotify"
              register={register}
              errors={errors}
            />
            <Input
              name="soundCloud"
              type="url"
              placeholder="sound-cloud"
              register={register}
              errors={errors}
            />
            <Input
              name="youtube"
              type="url"
              placeholder="youtube"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div id="social-media">
          <span>Social media</span>
          <div className="flex flex-row gap-5">
            <Input
              name="facebook"
              placeholder="facebook"
              type="url"
              register={register}
              errors={errors}
            />
            <Input
              name="twitter"
              type="url"
              placeholder="twitter"
              register={register}
              errors={errors}
            />
            <Input
              name="instagram"
              type="url"
              placeholder="instagram"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div id="social-media">
          <span>Contact</span>
          <div className="flex flex-row gap-5">
            <Input
              name="email"
              type="email"
              placeholder="email"
              register={register}
              errors={errors}
            />
            <Input
              name="number"
              type="text"
              placeholder="number"
              register={register}
              errors={errors}
            />
            <Input
              name="website"
              type="url"
              placeholder="website"
              register={register}
              errors={errors}
            />
          </div>
        </div>

        <button>submit</button>
      </form>
    </div>
  );
}

export default EpkForm;
