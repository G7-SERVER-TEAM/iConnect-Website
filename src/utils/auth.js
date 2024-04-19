
export async function login(user) {
    const ICONNECT_API = "http://localhost:8081/auth/username/login";
    try {
      const result = await fetch(ICONNECT_API, {
        method: "POST",
        headers: {
          'Content-Type' : "application/json",
        },
        body: JSON.stringify(user),
      });
      if (result.ok) {
        const responseBody = await result.text();
        const account = JSON.parse(responseBody)
        localStorage.setItem("token", account.access_token)
        localStorage.setItem("uid", account.uid)
        localStorage.setItem("role_id", account.role_id)
        localStorage.setItem("area_id", account.area);
        return true
      } 
    } catch (err) {
        console.error(err, err.stack);
    }
  };
