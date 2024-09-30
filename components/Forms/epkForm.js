import React from "react";
import { useForm } from "react-hook-form";
import Input from "../FormElements/Input";
import { _postEPK } from "../../models/epk.model";
import Button from "../button";

function EpkForm() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const processForm = async (data) => {
    const epkForm = {
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
    console.log(epkForm);
    try {
      const response = await _postEPK(epkForm);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex items-center  justify-center">
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            type="text"
            rows={10}
            cols={10}
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

        <Button className="flex flex-row gap-2 bg-white">submit</Button>
      </form>
    </div>
  );
}

export default EpkForm;
