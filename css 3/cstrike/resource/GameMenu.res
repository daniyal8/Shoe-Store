"GameMenu"
{
	"1"
	{
		"label" "DoDear Ranking Server"
		"command" "engine connect 10.101.10.52:27030"
		"OnlyInGame" "0"
	}
	"2"
	{
		"label" ""
		"command" ""
		"OnlyInGame" "0"
	}	
	"3"
	{
		"label" "#GameUI_GameMenu_ResumeGame"
		"command" "ResumeGame"
		"OnlyInGame" "1"
	}
	"4"
	{
		"label" "#GameUI_GameMenu_Disconnect"
		"command" "Disconnect"
		"OnlyInGame" "1"
	}
	"5"
	{
		"label" "#GameUI_GameMenu_PlayerList"
		"command" "OpenPlayerListDialog"
		"OnlyInGame" "1"
	}
	"6"
	{
		"label" ""
		"command" ""
		"OnlyInGame" "1"
	}
	"7"
	{
		"label" "#GameUI_GameMenu_FindServers"
		"command" "OpenServerBrowser"
	}
	"8"
	{
		"label" "#GameUI_GameMenu_CreateServer"
		"command" "OpenCreateMultiplayerGameDialog"
	}
	"9"
	{
		"label" "#GameUI_GameMenu_Achievements"
		"command" "OpenCSAchievementsDialog"
	}
	"10"
	{
		"label" "#GameUI_ReportBug"
		"command" "engine bug"
	}
	"11" [!$OSX]
	{
		"label" "#GameUI_LaunchBenchmark"
		"command" "OpenBenchmarkDialog"
	}
	"12"
	{
		"label" "#GameUI_GameMenu_Options"
		"command" "OpenOptionsDialog"
	}
	"13"
	{
		"label" "#GameUI_GameMenu_Quit"
		"command" "Quit"
	}
}

