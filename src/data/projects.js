export const projects = [
    {
        title: "3D Virtual Soccer Match",
        description:
            "Full 3D virtual reconstruction of an actual soccer match using real positional and event data. Built with the Godot game engine and powered by a Golang-based streaming API that delivers match data in small chunks, the system accurately reproduces player trajectories, ball physics, tactical movements, and key match events to mirror the real game.",
        skills: {
            "Engine": ["Godot"],
            "Backend API": ["Golang"],
            "Highlights": ["Streaming data as JSONL to load heavy data"],
        },
        gallery: [
            "match3d-preview.gif",
            "match3d-preview.png",
            "RHoPu1GmWPw",
        ],
        playUrlTmp: "https://ott-assets.onefootball.com/ppv/match-3d/web/index.html",
        sourceUrl: ""
    },
    {
        title: "Weapon Strikes",
        description:
            "A fast-paced action game developed in pure C using the SDL2 ecosystem and ported to Linux, Windows, macOS, iOS, Android, and Web (Emscripten). Unity Ads implemented through Java JNI on Android and Objective-C on iOS.",
        skills: {
            "Stack": ["C/C++", "SDL2"],
            "Platforms": ["Web", "Android", "iOS", "MacOSx", "Windows", "Linux"],
            "Highlights": ["Unity Ads Integration using JNI and Objective-C"],
            "Contribution Open-Source": ['<a class="underline" target="_blankc" href="https://github.com/libsdl-org/SDL_ttf/pull/326">SDL_ttf#326</a>'],
        },
        gallery: [
            "weapons-preview.gif",
            "weapons-preview.png",
            "qKnL7bg_JF4",
        ],
        playUrl: "https://caiotava.itch.io/weapon-strikes",
        sourceUrl: ""
    },
    {
        title: "Software Renderer",
        description:
            "A fully custom software renderer built in C++ and SDL3. No OpenGL, DirectX, Vulkan or GPU.\n" +
            "Includes texture mapping, .OBJ loading, camera controls, wireframe and vertex modes, ImGui scene navigation, and a pure CPU ray tracer.",
        skills: {
            "Stack": ["C/C++", "SDL3"],
            "Texture:": ["mapping and rasterization"],
            "Models": ["loading and displaying .OBJ 3D models"],
            "Camera": ["Basic camera system with movement and rotation"],
            "GUI": ["ImGui interface to browse multiple example scenes"],
            "Ray-Tracing": ["A fully CPU-based Ray Tracer, implemented with no graphics API"],
        },
        gallery: [
            "software3d-preview.gif",
            "software3d-preview.png",
            "wUiuPTKAaEE",
        ],
        playUrl: "https://caiotava.itch.io/software-rendering-3d",
        sourceUrl: ""
    },
    {
        title: "OpenGL Engine [WIP]",
        description:
            "A cross-platform rendering project built in C++, SDL3, and modern OpenGL.\n" +
            "Includes OpenGL 4.6 (desktop), OpenGL ES 3.0 (mobile/Web), and WebGL builds via Emscripten.\n" +
            "Implements the core pipeline taught in the book ‘Computer Graphics Programming in OpenGL With C++ (Edition 3)’, including shaders, matrix transforms, lighting, and interactive scenes.",
        skills: {
            "Stack": ["C/C++", "SDL3", "OpenGL 4.6", "OpenGL ES 3.0", "WebGL/Emscripten"],
            "Rendering": [
                "Shader-based pipeline (vertex & fragment shaders)",
                "Perspective/orthographic projection matrices",
                "Lighting models (ambient, diffuse)"
            ],
            "Models": ["Loading and rendering 3D meshes"],
            "Camera": [
                "FPS-style camera movement",
                "Orbit camera for inspecting models"
            ],
            "Scenes": [
                "Multiple OpenGL scenes implemented from the book",
                "Hot-swappable through ImGui"
            ],
            "Web Build": [
                "Emscripten/WebGL version running directly in the browser"
            ],
        },
        gallery: [
            "opengl-engine-preview.gif",
            "opengl-engine-preview.png",
            "8V89zpomo-U"
        ],
        playUrl: "https://caiotava.itch.io/opengl-rendering",
        sourceUrl: "https://github.com/caiotava/opengl-book"
    },
];
