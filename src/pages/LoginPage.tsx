import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthProvider";

import login from "../styles/pages/LoginPage.module.css";
// import styles from "../styles/components/sharedComponents.module.css";

function LoginPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users away from login page
  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  // Show loading state while auth is initializing
  if (loading) {
    return (
      <div
      // className={styles.loading}
      >
        <div
        // className={styles.spinner}
        >
          Loading...
        </div>
      </div>
    );
  }

  // Don't render login form if user is already authenticated
  if (user) {
    return null;
  }

  return (
    <div className={login.supabase_auth_ui_ui}>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        theme="evenDarker"
        redirectTo="/dashboard"
      />
    </div>
  );
}

export default LoginPage;
