{ pkgs, ... }: {
  # The list of packages to be installed
  # in your environment.
  packages = [
    pkgs.python3
  ];

  # Let Project IDX know you're running a web server.
  previews = {
    enable = true;
    previews = [{
      # A simple Python server that serves the current directory.
      command = [ "python3" "-m" "http.server" "$PORT" ];
      manager = "web";
    }];
  };
}