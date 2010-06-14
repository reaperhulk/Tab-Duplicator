document.addEventListener("contextmenu", msgHandle, false);

function msgHandle(event) {
	safari.self.tab.setContextMenuEventUserInfo(event, window.location.href);
}
