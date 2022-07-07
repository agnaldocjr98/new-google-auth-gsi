import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const client_id = "YOUR_CLIENT_ID";

export function Google() {
  async function handleCallBack(response: any) {
    const retorno = jwtDecode(response.credential);
    console.log("response", retorno);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id,
      callback: handleCallBack,
    });

    google.accounts.id.renderButton(
      document.getElementById("signin") as HTMLElement,
      {
        type: "standard",
        size: "medium",
        width: "0",
      }
    );
  }, []);

  return (
    <div>
      <div id="signin"></div>
    </div>
  );
}
