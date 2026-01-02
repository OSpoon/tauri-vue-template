use tauri::{
    menu::{Menu, MenuItemBuilder},
    App,
};
use crate::updater;

/// Setup application menu
pub fn setup_menu(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let handle = app.handle();
    let menu = Menu::default(handle)?;

    // Create menu item
    let check_update =
        MenuItemBuilder::with_id("check-update", "Check for Updates...").build(handle)?;

    // Get all top-level menu items (File, Edit, etc.)
    let items = menu.items()?;

    #[cfg(target_os = "macos")]
    {
        // macOS: The first menu (index 0) is the app-specific menu (contains About, Quit)
        if let Some(app_menu) = items.get(0).and_then(|i| i.as_submenu()) {
            // Insert at the 2nd row (index 1), usually after "About"
            app_menu.insert(&check_update, 1)?;
        }
    }

    #[cfg(not(target_os = "macos"))]
    {
        // Windows/Linux: The last menu is usually "Help"
        if let Some(help_menu) = items.last().and_then(|i| i.as_submenu()) {
            // Append to the end of Help menu
            help_menu.append(&check_update)?;
        }
    }

    app.set_menu(menu)?;

    app.on_menu_event(move |app_handle, event| {
        if event.id == "check-update" {
            let handle = app_handle.clone();
            tauri::async_runtime::spawn(async move {
                updater::check_and_handle_update(handle).await;
            });
        }
    });

    Ok(())
}
