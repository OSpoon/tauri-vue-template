use tauri::{AppHandle, Emitter};
use tauri_plugin_updater::UpdaterExt;

pub async fn check_and_handle_update(handle: AppHandle) {
    let updater = handle.updater().expect("failed to get updater");

    match updater.check().await {
        Ok(Some(update)) => {
            // 1. Emit event: update found, preparing to download
            let _ = handle.emit("update-event", "downloading");

            if let Err(e) = update
                .download_and_install(|_, _| {}, || {}) // Ignore progress callbacks
                .await
            {
                // 2. Emit event: installation failed
                let _ = handle.emit("update-event", format!("error: Installation failed: {}", e));
                return;
            }

            // 3. Emit event: preparing to restart
            let _ = handle.emit("update-event", "restarting");
            
            // Give frontend time to show "restarting" message
            std::thread::sleep(std::time::Duration::from_secs(1));
            handle.restart();
        }
        Ok(None) => {
            // 4. Emit event: already up-to-date
            let _ = handle.emit("update-event", "up-to-date");
        }
        Err(e) => {
            // 5. Emit event: check failed
            let _ = handle.emit("update-event", format!("error: Update check failed: {}", e));
        }
    }
}