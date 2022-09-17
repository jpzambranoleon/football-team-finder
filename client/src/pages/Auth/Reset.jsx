import { Box } from "@mui/material";
import axios from "axios";
import { useCallback } from "react";
import { useContext } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { InfoContext } from "../../utils/InfoProvider";

export default function Reset(props) {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { setStatus } = useContext(InfoContext);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { token } = useParams();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    return executeRecaptcha("yourAction");
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const captcha = await handleReCaptchaVerify();

    axios
      .post("/auth/rest", { ...formData, token, captcha })
      .then((res) => {
        setLoading(false);
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
      })
      .catch((err) => {
        setLoading(false);
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  };

  return <Box></Box>;
}
