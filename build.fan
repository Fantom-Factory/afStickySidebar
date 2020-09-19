using build::BuildPod

class Build : BuildPod {

	new make() {
		podName = "afStickySidebar"
		summary = "For when CSS position sticky just isn't enough"
		version = Version("0.0.1")

		meta = [
			"pod.dis"		: "Sticky Sidebar",
			"repo.tags"		: "web",
			"repo.public"	: "true"
		]

		depends = [
			// ---- Fantom Core -----------------
			"sys        1.0.73 - 1.0",

			// ---- Fantom Web ------------------
			"dom        1.0.73 - 1.0",
			"graphics   1.0.73 - 1.0",
		]

		srcDirs = [`fan/`]
		resDirs = [`doc/`]
		jsDirs	= [`js/`]
	}
}
