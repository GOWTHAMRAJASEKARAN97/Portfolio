import { FC, useState } from "react";
import { Control, useForm } from "react-hook-form";
import { ContactFormInput } from "../types/formInputs";
import Form from "../components/form/Index";
import Toast from "../utils/toast/Index";
import ContactBackground from "../assets/contact.jpg";
import DynamicWelcomeNote from "../components/dynamic-welcome-note/Index";

declare global {
  interface Window {
    Email: any;
  }
}

interface Props {
  cb: (data: ContactFormInput & { id: string }) => void;
}

const Contact: FC<Props> = ({ cb }) => {
  const {
    handleSubmit,
    reset,
    unregister,
    setValue,
    getValues,
    watch,
    control: formControl,
  } = useForm<ContactFormInput>({});

  let enableButton = true;
  const nameEvent = watch("name");
  const mailEvent = watch("email");
  const subjectEvent = watch("subject");
  const messageEvent = watch("message");
  const [openLoader, setOpenLoader] = useState(false);
  const [openSkeleton, setOpenSkeleton] = useState(false);

  if (nameEvent && mailEvent && subjectEvent && messageEvent) {
    enableButton = false;
  }

  const sendEmail = (data: ContactFormInput) => {
    setOpenLoader(true);
    window.Email &&
      window.Email.send({
        SecureToken: "abf8669a-8e34-4d29-8e95-3cc3b26b0e07",
        From: "gowthamrajasekaran97@gmail.com",
        To: "gowthamrajasekaran97@gmail.com",
        Subject: data.subject,
        Body: `${data.email} sent message through your portfolio. The message :${data.message}`,
      }).then((message: any) => {
        Toast({ message: "Successfully submitted", type: "success" });
        setOpenLoader(false);
        setOpenSkeleton(true);
        setTimeout(() => {
          setOpenSkeleton(false);
        }, 1000);
      });
  };

  const onSubmit: any = async (data: ContactFormInput & { id: string }) => {
    sendEmail(data);
    cb({
      name: data.name,
      email: data?.email,
      subject: data.subject,
      message: data.message,
    } as ContactFormInput & { id: string });
    reset();
  };

  return (
    <div>
      <DynamicWelcomeNote
        background={ContactBackground}
        heading="CONTACT ME."
        text="Let's have a chat"
      />
      <Form
        control={formControl as unknown as Control}
        setValue={setValue}
        getValues={getValues}
        unregister={unregister}
        enableButton={enableButton}
        onSubmit={handleSubmit(onSubmit)}
        openLoader={openLoader}
        openSkeleton={openSkeleton}
      />
    </div>
  );
};

export default Contact;
