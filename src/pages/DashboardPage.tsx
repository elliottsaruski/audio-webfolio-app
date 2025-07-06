import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TrackManager from "../components/dashboard/TrackManager";
import ThemeEditor from "../components/dashboard/ThemeEditor";
import BioEditor from "../components/dashboard/BioEditor";
import LivePreview from "../components/dashboard/LivePreview";

import styles from "../styles/pages/DashboardPage.module.css";

function DashboardPage() {
  const { user, signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <main className={styles.dashboardContainer}>
      <header className={styles.dashboardHeader}>
        <div className={styles.dashboardTitle}>
          <h1>Dashboard</h1>
        </div>

        <div className={styles.userMenu}>
          <button
            className={styles.userMenuTrigger}
            onClick={() => setShowUserMenu(!showUserMenu)}>
            <span>{user?.email}</span>
          </button>

          {showUserMenu && (
            <div className={styles.userMenuDropdown}>
              <button className={styles.signOutBtn} onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </header>
      <div className={styles.dashboardContent}>
        <section className={styles.sidebar}>
          {/* <div className={sharedstyles.divider}></div> */}

          <details>
            <summary>Track Manager</summary>
            <TrackManager />
          </details>
          {/* <div className={sharedstyles.divider}></div> */}
          <details>
            <summary>Theme Editor</summary>
            <ThemeEditor />
          </details>
          {/* <div className={sharedstyles.divider}></div> */}

          <details>
            <summary>Bio Editor</summary>
            <BioEditor />
          </details>
          {/* <div className={sharedstyles.divider}></div> */}
        </section>

        <section className={styles.preview}>
          <LivePreview />
        </section>
      </div>
    </main>
  );
}

export default DashboardPage;
