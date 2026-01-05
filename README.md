<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.5-black"/>
    <a href="https://github.com/minejs-org"> <img src="https://img.shields.io/badge/🔥-@minejs-black"/> </a>
    <br>
    <img src="https://img.shields.io/badge/coverage---%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/minejs-org/hmm?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/minejs-org/hmm?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Quick Start 🔥

    ```bash
    # install via bun or npm
    bun install @minejs/hmm -g

    # Now use 'hmm' anywhere
    hmm --help
    ```

    ```bash
    # Create a new space (interactive)
    hmm init

    # Or with options
    hmm init my-lib -t lib

    # Navigate and setup
    cd my-lib
    hmm install
    hmm build
    ```

    <br>

- ## Commands

    - ### Space Management

        ```bash
        # Create new space (interactive mode)
        hmm init [name]

        # Create with options
        hmm init my-lib -t lib                    # Specify type (lib, cli, server, app)
        hmm init my-lib -t lib --desc "My lib"    # With description

        # Show current space information
        hmm info
        ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Package Manager (Bun wrapper)

        ```bash
        # Install dependencies
        hmm install                   # Install all from package.json
        hmm i                         # Alias for install
        hmm install lodash axios      # Install specific packages
        hmm install lodash --dev      # Install as dev dependency
        hmm install lodash --global   # Install globally

        # Remove packages
        hmm remove <packages...>      # Remove with confirmation
        hmm r <packages...>           # Alias for remove
        hmm remove lodash axios       # Remove multiple packages
        hmm remove lodash --global    # Remove global package

        # Update packages
        hmm update                    # Update all (interactive)
        hmm up                        # Alias for update
        hmm update lodash             # Update specific packages

        # Link packages
        hmm link                      # Link current package globally
        hmm link <package>            # Link global package to project
        hmm unlink                    # Unlink current package globally
        hmm unlink <package>          # Unlink global package from project

        # List packages
        hmm list                      # List local packages
        hmm ls                        # Alias for list
        hmm list --global             # List global packages

        # Run scripts
        hmm run <script>              # Run any script from package.json
        hmm run dev                   # Example: run dev script
        hmm run build -- --watch      # Pass additional args to script
        ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Build & Development

        ```bash
        # Lint the project
        hmm lint

        # Build the project
        hmm build

        # Start the project (builds first, then runs)
        hmm start                     # Run the built main file
        hmm start --help              # Pass args to your app
        hmm start arg1 arg2 --flag    # All args passed through

        # Run tests
        hmm test                              # Run all tests
        hmm test path/to/test.ts              # Run specific test file
        hmm test --coverage                   # Generate coverage report
        hmm test --coverage --coverage-reporter=lcov  # Specify reporter format
        hmm test --watch                      # Run in watch mode
        hmm test --bail                       # Exit on first failure
        hmm test --timeout 5000               # Set timeout (ms)
        hmm test --rerun-each 3               # Re-run each test N times
        hmm test --concurrent                 # Run tests concurrently
        hmm test -t "math"                    # Filter by test name pattern
        hmm test --coverage --watch           # Combine multiple options

        # Clean build artifacts
        hmm clean
        ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Publishing

        ```bash
        # Publish to npm (interactive)
        hmm publish

        # Publish with options
        hmm publish --tag beta                # Publish with tag
        hmm publish --access public           # Set access level (public/restricted)
        hmm publish --tag next --access public
        ```

    <br>

- ## Space Types and Examples

    - ### Available Types

        - **`lib`** - TypeScript library for npm

            > Zero dependencies template
            >
            > Perfect for publishing reusable packages
            >
            > Example: [hmm-repos/lib](https://github.com/hmm-repos/lib)

        - **`cli`** - Command-line tool

            > Includes `@minejs/cli` for CLI development
            >
            > Built-in argument parsing and command handling
            >
            > Example: [hmm-repos/cli](https://github.com/hmm-repos/cli)

        - **`server`** - Backend server application

            > Includes `@minejs/server` for server development
            >
            > Ready for API and backend services
            >
            > Example: [hmm-repos/server](https://github.com/hmm-repos/server)

        - **`app`** - Full-stack web application

            > Includes `@cruxjs/app`
            >
            > Complete web application stack
            >
            > Example: [hmm-repos/app](https://github.com/hmm-repos/app)

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Templates

        > Each space type currently supports the **`clean`** template:

        - Minimal setup with essential tools

        - TypeScript configured

        - Build system ready (tsup)

        - Type-safe and production-ready

    <br>

- ## Configuration

    - ### `.hmm` File

        > Each space contains a `.hmm` configuration file that stores project metadata:

        ```json
        {
            "type"              : "cli",
            "template"          : "clean",
            "pm"                : "bun",

            "repo"              : {
                "org"           : "minejs",
                "name"          : "hmm",
                "version"       : "0.0.1",
                "desc"          : "Creates and manages spaces",
                "kw"            : ["minejs", "hmm"],
                "license"       : "MIT",
                "issues"        : "https://github.com/minejs-org/hmm/issues",
                "homepage"      : "https://github.com/minejs-org/hmm#readme",
                "git_url"       : "git+https://github.com/minejs-org/hmm.git"
            },

            "author"            : {
                "id"            : "maysara-elshewehy",
                "name"          : "Maysara",
                "email"         : "maysara.elshewehy@gmail.com",
                "url"           : "https://github.com/maysara-elshewehy"
            },

            "createdAt"         : "2025-11-29T01:22:48.497Z"
        }
        ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Key Features

        - **Automatic Configuration**: Space automatically manages your `package.json` with proper formatting

        - **Organization Support**: Create scoped packages with `@org/package-name` format

        - **GitHub Integration**: Automatic repository URLs and author links

        - **Consistent Formatting**: JSON files formatted with aligned colons and proper indentation

    <br>

- ## Advanced Usage

    - ### Creating Scoped Packages

        ```bash
        # Create a package under an organization
        hmm init @my-org/awesome-lib -t lib

        # During interactive mode, enter: @my-org/package-name
        hmm init
        # name: @my-org/package-name
        ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Using Current Directory

        ```bash
        # Create space in current directory (if folder name matches)
        mkdir my-project
        cd my-project
        hmm init my-project -t lib
        # Prompt: "Use current directory 'my-project' as the space root?" → Yes
        ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Test Workflows

        ```bash
        # Development with watch mode
        hmm test --watch

        # CI/CD with coverage
        hmm test --coverage --bail

        # Generate coverage for external tools
        hmm test --coverage --coverage-reporter=lcov

        # Debug specific tests
        hmm test -t "should handle errors" --bail

        # Performance testing
        hmm test --rerun-each 100 --concurrent
        ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Link Workflows

        ```bash
        # Link your library for local development
        cd my-lib
        hmm link              # Links globally

        cd ../my-app
        hmm link my-lib       # Links my-lib to this project

        # After development
        cd ../my-app
        hmm unlink my-lib     # Unlink from project

        cd ../my-lib
        hmm unlink            # Unlink globally
        ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> <br> </div>

    - ### Publishing Workflow

        ```bash
        # 1. Update version in package.json
        # 2. Build and test
        hmm build
        hmm test --coverage

        # 3. Publish (interactive)
        hmm publish
        # Confirms: package name, version, tag, access level

        # Or publish directly
        hmm publish --access public

        # Beta releases
        hmm publish --tag beta
        ```

    <br>

- ## Requirements

    > **Bun** >= 1.3.3

    > **Git** (for template cloning)

    > **Node.js** (optional, for npm compatibility)

    <br>

- ## Documentation

    > Full documentation coming soon at [Github Pages](#)

    > For now, run `hmm --help` or check individual command help:

    ```bash
    hmm --help
    hmm init --help
    hmm test --help
    hmm publish --help
    ```

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->