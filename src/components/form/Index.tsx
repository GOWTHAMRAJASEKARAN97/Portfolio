import { useMediaQuery } from "@mui/material";
import { FC } from "react";
import {
  Control,
  UseFormSetValue,
  UseFormGetValues,
  UseFormUnregister,
} from "react-hook-form";
import { ContactFormInput } from "../../types/formInputs";
import { BufferLoader } from "../../utils/loaders/api-loader";
import SkeletonLayout from "../../utils/loaders/skeleton-loader";
import Input from "../dynamic-input-field/Input";
import S from "./Form.Styled";

interface Props {
  control: Control;
  setValue: UseFormSetValue<ContactFormInput>;
  getValues: UseFormGetValues<ContactFormInput>;
  unregister: UseFormUnregister<ContactFormInput>;
  enableButton: boolean;
  onSubmit: () => {};
  openLoader: boolean;
  openSkeleton: boolean;
}

const Form: FC<Props> = ({
  control,
  setValue,
  getValues,
  unregister,
  enableButton,
  onSubmit,
  openLoader,
  openSkeleton,
}) => {
  const matches = useMediaQuery("(max-width:1140px)");
  return (
    <>
      <S.FormContainer>
        {openSkeleton ? (
          <SkeletonLayout />
        ) : (
          <>
            <S.Form
              id="contact"
              onSubmit={onSubmit}
              sx={{ width: matches ? "100%" : "50%" }}
            >
              <Input
                name="name"
                type="text"
                control={control}
                rules={{
                  required: "required",
                }}
                options={{
                  label: "Name",
                  gridArea: "nme",
                  placeholder: "Enter your name",
                }}
              />
              <Input
                name="email"
                type="text"
                control={control}
                rules={{
                  required: "required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                }}
                options={{
                  label: "Email",
                  gridArea: "mil",
                  placeholder: "Enter your email",
                }}
              />
              <Input
                name="subject"
                type="text"
                control={control}
                rules={{ required: "required" }}
                options={{
                  label: "Subject",
                  gridArea: "sub",
                  placeholder: "Enter your subject",
                }}
              />
              <Input
                name="message"
                type="text"
                control={control}
                rules={{ required: "required" }}
                options={{
                  label: "Message",
                  gridArea: "msg",
                  fullHeight: true,
                  multiline: true,
                  maxRows: 4,
                  textarea: true,
                  placeholder: "Enter your message",
                }}
              />
            </S.Form>
            <S.StyledButton
              form="contact"
              type="submit"
              disabled={enableButton}
            >
              Submit
            </S.StyledButton>
            {openLoader && (
              <S.LoaderContainer>
                <BufferLoader loaderText="Submitting" />
              </S.LoaderContainer>
            )}
          </>
        )}
      </S.FormContainer>
    </>
  );
};

export default Form;
