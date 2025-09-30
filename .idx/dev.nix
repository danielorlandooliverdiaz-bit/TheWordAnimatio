{ pkgs, ... }: {
  # Let Project IDX know you're running a web server.
  previews = {
    enable = true;
    previews = [{
      # A simple Python server that serves the current directory.
      command = [ "python" "-m" "http.server" "$PORT" ];
      manager = "web";
    }];
  };
}