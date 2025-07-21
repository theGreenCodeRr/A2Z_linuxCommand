// --- DARK MODE LOGIC (RUNS IMMEDIATELY) ---
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "light";

if (savedTheme === "dark") {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}

// --- DATA ---
const azCommands = [
  // A
  {
    name: "alias",
    desc: "Create a shortcut for a longer command.",
    gif: "https://placehold.co/600x400/333/fff?text=alias",
    explanation: `<p>The <b>alias</b> command lets you create temporary shortcuts for longer commands.</p><ul><li><b>alias name='command'</b>: Creates a new alias.</li><li><b>unalias name</b>: Removes an alias.</li></ul>`,
  },
  {
    name: "apropos",
    desc: "Search the manual page names and descriptions.",
    gif: "https://placehold.co/600x400/333/fff?text=apropos",
    explanation: `<p>The <b>apropos</b> command searches the manual pages for a keyword.</p><ul><li><b>apropos network</b>: Finds commands related to networking.</li></ul>`,
  },
  {
    name: "apt",
    desc: "Package manager for Debian-based systems.",
    gif: "https://placehold.co/600x400/333/fff?text=apt",
    explanation: `<p><b>apt</b> is used to install, update, and remove software packages on Debian and Ubuntu.</p><ul><li><b>sudo apt update</b>: Refreshes the package list.</li><li><b>sudo apt install [package]</b>: Installs a package.</li></ul>`,
  },
  {
    name: "awk",
    desc: "Pattern scanning and processing language.",
    gif: "https://placehold.co/600x400/333/fff?text=awk",
    explanation: `<p><b>awk</b> is a powerful tool for processing text files, especially data arranged in columns.</p><ul><li><b>awk '{print $1}' file.txt</b>: Prints the first column of a file.</li></ul>`,
  },
  // B
  {
    name: "basename",
    desc: "Strip directory and suffix from filenames.",
    gif: "https://placehold.co/600x400/333/fff?text=basename",
    explanation: `<p>The <b>basename</b> command removes any path and/or suffix from a filename.</p><ul><li><b>basename /path/to/file.txt</b>: Outputs 'file.txt'.</li></ul>`,
  },
  {
    name: "bg",
    desc: "Send a job to the background.",
    gif: "https://placehold.co/600x400/333/fff?text=bg",
    explanation: `<p>The <b>bg</b> command resumes a suspended job and runs it in the background.</p><ul><li>First, suspend a running job with <b>Ctrl+Z</b>.</li><li>Then, type <b>bg</b> to let it continue in the background.</li></ul>`,
  },
  // C
  {
    name: "cal",
    desc: "Display a calendar.",
    gif: "https://placehold.co/600x400/333/fff?text=cal",
    explanation: `<p>The <b>cal</b> command displays a simple calendar in the terminal.</p><ul><li><b>cal</b>: Shows the current month.</li><li><b>cal 2025</b>: Shows the calendar for the entire year 2025.</li></ul>`,
  },
  {
    name: "cat",
    desc: "Concatenate and display files.",
    gif: "https://placehold.co/600x400/333/fff?text=cat",
    explanation: `<p>The <b>cat</b> command is most often used to display the contents of a file to the screen.</p><ul><li><b>cat filename.txt</b>: Displays the content of the file.</li><li><b>cat -n filename.txt</b>: Displays file content with line numbers.</li></ul>`,
  },
  {
    name: "cd",
    desc: "Change the current directory.",
    gif: "https://i.imgur.com/9qK9bYF.gif",
    explanation: `<p>The <b>cd</b> command is used to navigate between folders in your file system.</p><ul><li><b>cd /path/to/directory</b>: Navigates to a specific folder.</li><li><b>cd ..</b>: Moves up one directory level.</li></ul>`,
  },
  {
    name: "chgrp",
    desc: "Change group ownership.",
    gif: "https://placehold.co/600x400/333/fff?text=chgrp",
    explanation: `<p>The <b>chgrp</b> command is used to change the group ownership of a file or directory.</p><ul><li><b>chgrp newgroup filename</b>: Changes the group of the file.</li></ul>`,
  },
  {
    name: "chmod",
    desc: "Change file access permissions.",
    gif: "https://placehold.co/600x400/333/fff?text=chmod",
    explanation: `<p>The <b>chmod</b> command changes the access permissions (read, write, execute) of files and directories.</p><ul><li><b>chmod +x script.sh</b>: Makes a script executable.</li><li><b>chmod 755 filename</b>: Sets permissions numerically.</li></ul>`,
  },
  {
    name: "chown",
    desc: "Change file owner and group.",
    gif: "https://placehold.co/600x400/333/fff?text=chown",
    explanation: `<p>The <b>chown</b> command is used to change the ownership of a file or directory.</p><ul><li><b>chown user:group filename</b>: Changes both the user and group owner.</li></ul>`,
  },
  {
    name: "clear",
    desc: "Clear the terminal screen.",
    gif: "https://placehold.co/600x400/333/fff?text=clear",
    explanation: `<p>The <b>clear</b> command clears your terminal screen, moving the prompt to the top. You can also use the shortcut <b>Ctrl+L</b>.</p>`,
  },
  {
    name: "cmp",
    desc: "Compare two files byte by byte.",
    gif: "https://placehold.co/600x400/333/fff?text=cmp",
    explanation: `<p>The <b>cmp</b> command compares two files and reports the first byte and line number where they differ.</p><ul><li><b>cmp file1.txt file2.txt</b>: Compares two files.</li></ul>`,
  },
  {
    name: "comm",
    desc: "Compare two sorted files line by line.",
    gif: "https://placehold.co/600x400/333/fff?text=comm",
    explanation: `<p>The <b>comm</b> command compares two sorted files and shows lines that are unique to each and lines that are common.</p><ul><li><b>comm file1.txt file2.txt</b>: Compares two sorted files.</li></ul>`,
  },
  {
    name: "cp",
    desc: "Copy files and directories.",
    gif: "https://placehold.co/600x400/333/fff?text=cp",
    explanation: `<p>The <b>cp</b> command is used to copy files or directories.</p><ul><li><b>cp source.txt destination.txt</b>: Copies a file.</li><li><b>cp -r source_dir/ destination_dir/</b>: Copies a directory recursively.</li></ul>`,
  },
  {
    name: "cron",
    desc: "Daemon to execute scheduled commands.",
    gif: "https://placehold.co/600x400/333/fff?text=cron",
    explanation: `<p><b>cron</b> is a system that runs commands on a schedule. You edit its configuration with 'crontab'.</p><ul><li><b>crontab -e</b>: Edits the current user's crontab file.</li><li><b>crontab -l</b>: Lists the current cron jobs.</li></ul>`,
  },
  {
    name: "curl",
    desc: "Transfer data from or to a server.",
    gif: "https://placehold.co/600x400/333/fff?text=curl",
    explanation: `<p><b>curl</b> is a tool for transferring data with URLs, often used for testing APIs or downloading files.</p><ul><li><b>curl https://example.com</b>: Displays the HTML of a site.</li><li><b>curl -O url</b>: Downloads a file.</li></ul>`,
  },
  {
    name: "cut",
    desc: "Remove sections from each line of files.",
    gif: "https://placehold.co/600x400/333/fff?text=cut",
    explanation: `<p>The <b>cut</b> command is used for extracting sections from each line of a file.</p><ul><li><b>cut -d':' -f1 /etc/passwd</b>: Extracts the first field from the password file.</li></ul>`,
  },
  // D
  {
    name: "date",
    desc: "Print or set the system date and time.",
    gif: "https://placehold.co/600x400/333/fff?text=date",
    explanation: `<p>The <b>date</b> command displays the current date and time.</p><ul><li><b>date</b>: Shows the current date and time.</li><li><b>date +%Y-%m-%d</b>: Formats the output.</li></ul>`,
  },
  {
    name: "df",
    desc: "Display free disk space.",
    gif: "https://placehold.co/600x400/333/fff?text=df",
    explanation: `<p>The <b>df</b> command reports the amount of available disk space on file systems.</p><ul><li><b>df -h</b>: Displays in a human-readable format.</li></ul>`,
  },
  {
    name: "diff",
    desc: "Compare files line by line.",
    gif: "https://placehold.co/600x400/333/fff?text=diff",
    explanation: `<p>The <b>diff</b> command analyzes two files and prints the lines that are different.</p><ul><li><b>diff file1.txt file2.txt</b>: Shows differences.</li></ul>`,
  },
  {
    name: "dig",
    desc: "DNS lookup utility.",
    gif: "https://placehold.co/600x400/333/fff?text=dig",
    explanation: `<p>The <b>dig</b> command is used for querying DNS servers to get information about domain names.</p><ul><li><b>dig google.com</b>: Shows DNS information for google.com.</li></ul>`,
  },
  {
    name: "dmesg",
    desc: "Print or control the kernel ring buffer.",
    gif: "https://placehold.co/600x400/333/fff?text=dmesg",
    explanation: `<p>The <b>dmesg</b> command is used to examine or control the kernel ring buffer, which contains messages from the kernel.</p><ul><li><b>dmesg | less</b>: Views kernel messages.</li></ul>`,
  },
  {
    name: "du",
    desc: "Estimate file space usage.",
    gif: "https://placehold.co/600x400/333/fff?text=du",
    explanation: `<p>The <b>du</b> command shows how much space is used by files and directories.</p><ul><li><b>du -sh /path/to/dir</b>: Shows a summary of a directory's total size.</li></ul>`,
  },
  // E
  {
    name: "echo",
    desc: "Display a line of text.",
    gif: "https://placehold.co/600x400/333/fff?text=echo",
    explanation: `<p>The <b>echo</b> command is used to print text to the terminal. It's often used in shell scripts.</p><ul><li><b>echo "Hello, World"</b>: Prints the message.</li></ul>`,
  },
  {
    name: "env",
    desc: "Run a program in a modified environment.",
    gif: "https://placehold.co/600x400/333/fff?text=env",
    explanation: `<p>The <b>env</b> command is used to run a command in a custom environment or to list the current environment variables.</p><ul><li><b>env</b>: Lists all environment variables.</li></ul>`,
  },
  {
    name: "exit",
    desc: "Exit the shell.",
    gif: "https://placehold.co/600x400/333/fff?text=exit",
    explanation: `<p>The <b>exit</b> command terminates the current shell session or script.</p><ul><li><b>exit</b>: Closes the terminal window or ends the script.</li></ul>`,
  },
  // F
  {
    name: "fg",
    desc: "Bring a job to the foreground.",
    gif: "https://placehold.co/600x400/333/fff?text=fg",
    explanation: `<p>The <b>fg</b> command brings a background job into the foreground, making it the active process.</p><ul><li><b>jobs</b>: List background jobs.</li><li><b>fg %1</b>: Brings job number 1 to the foreground.</li></ul>`,
  },
  {
    name: "file",
    desc: "Determine file type.",
    gif: "https://placehold.co/600x400/333/fff?text=file",
    explanation: `<p>The <b>file</b> command inspects a file and tells you what type of file it is (e.g., text file, image, executable).</p><ul><li><b>file document.pdf</b>: Reports the file type.</li></ul>`,
  },
  {
    name: "find",
    desc: "Search for files in a directory hierarchy.",
    gif: "https://placehold.co/600x400/333/fff?text=find",
    explanation: `<p>The <b>find</b> command is a powerful utility for searching for files and directories.</p><ul><li><b>find . -name "*.txt"</b>: Finds all files ending with .txt.</li></ul>`,
  },
  {
    name: "free",
    desc: "Display amount of free and used memory.",
    gif: "https://placehold.co/600x400/333/fff?text=free",
    explanation: `<p>The <b>free</b> command provides a quick look at the memory usage on the system.</p><ul><li><b>free -h</b>: Displays memory in human-readable format.</li></ul>`,
  },
  // G
  {
    name: "getent",
    desc: "Get entries from administrative database.",
    gif: "https://placehold.co/600x400/333/fff?text=getent",
    explanation: `<p>The <b>getent</b> command retrieves entries from databases like the password or group files.</p><ul><li><b>getent passwd root</b>: Gets the password file entry for the root user.</li></ul>`,
  },
  {
    name: "grep",
    desc: "Print lines matching a pattern.",
    gif: "https://placehold.co/600x400/333/fff?text=grep",
    explanation: `<p><b>grep</b> searches for a specific pattern of text inside files.</p><ul><li><b>grep "error" logfile.txt</b>: Searches for "error" in a log file.</li><li><b>grep -r "pattern" .</b>: Searches recursively.</li></ul>`,
  },
  {
    name: "groups",
    desc: "Print the groups a user is in.",
    gif: "https://placehold.co/600x400/333/fff?text=groups",
    explanation: `<p>The <b>groups</b> command displays the groups that a user is a member of.</p><ul><li><b>groups username</b>: Shows the groups for a specific user.</li></ul>`,
  },
  {
    name: "gzip",
    desc: "Compress or expand files.",
    gif: "https://placehold.co/600x400/333/fff?text=gzip",
    explanation: `<p>The <b>gzip</b> command is used to compress files, typically replacing the original file with a compressed version ending in .gz.</p><ul><li><b>gzip largefile.txt</b>: Compresses the file into 'largefile.txt.gz'.</li><li><b>gunzip largefile.txt.gz</b>: Decompresses the file.</li></ul>`,
  },
  // H
  {
    name: "head",
    desc: "Output the first part of files.",
    gif: "https://placehold.co/600x400/333/fff?text=head",
    explanation: `<p>The <b>head</b> command displays the first few lines of a file.</p><ul><li><b>head -n 20 filename.txt</b>: Shows the first 20 lines.</li></ul>`,
  },
  {
    name: "history",
    desc: "Display the command history list.",
    gif: "https://placehold.co/600x400/333/fff?text=history",
    explanation: `<p>The <b>history</b> command displays a list of the commands you have previously run.</p><ul><li><b>history 10</b>: Shows the last 10 commands.</li></ul>`,
  },
  {
    name: "hostname",
    desc: "Show or set the system's host name.",
    gif: "https://placehold.co/600x400/333/fff?text=hostname",
    explanation: `<p>The <b>hostname</b> command is used to display the system's current host name.</p><ul><li><b>hostname</b>: Shows the host name.</li><li><b>hostname -I</b>: Shows the IP address(es) of the system.</li></ul>`,
  },
  {
    name: "htop",
    desc: "Interactive process viewer.",
    gif: "https://placehold.co/600x400/333/fff?text=htop",
    explanation: `<p><b>htop</b> is an interactive process viewer that is more user-friendly than 'top'.</p><ul><li><b>htop</b>: Starts the viewer.</li></ul>`,
  },
  // I
  {
    name: "id",
    desc: "Print real and effective user and group IDs.",
    gif: "https://placehold.co/600x400/333/fff?text=id",
    explanation: `<p>The <b>id</b> command prints information about a given user, such as their user ID (UID) and group IDs (GIDs).</p><ul><li><b>id username</b>: Shows IDs for a specific user.</li></ul>`,
  },
  {
    name: "ip",
    desc: "Show / manipulate routing and devices.",
    gif: "https://placehold.co/600x400/333/fff?text=ip",
    explanation: `<p>The <b>ip</b> command is a modern and powerful tool for network configuration.</p><ul><li><b>ip addr show</b>: Displays IP addresses and network interfaces.</li><li><b>ip route</b>: Shows the routing table.</li></ul>`,
  },
  // J
  {
    name: "jobs",
    desc: "List active jobs.",
    gif: "https://placehold.co/600x400/333/fff?text=jobs",
    explanation: `<p>The <b>jobs</b> command lists the processes that you have running in the background or suspended.</p><ul><li><b>jobs -l</b>: Lists jobs with their Process IDs (PIDs).</li></ul>`,
  },
  {
    name: "join",
    desc: "Join lines of two files on a common field.",
    gif: "https://placehold.co/600x400/333/fff?text=join",
    explanation: `<p>The <b>join</b> command merges the lines of two sorted files based on a common field.</p><ul><li><b>join file1.txt file2.txt</b>: Joins two files.</li></ul>`,
  },
  {
    name: "journalctl",
    desc: "Query the systemd journal.",
    gif: "https://placehold.co/600x400/333/fff?text=journalctl",
    explanation: `<p><b>journalctl</b> is used to view logs collected by systemd.</p><ul><li><b>journalctl -u sshd</b>: Shows logs for the SSH service.</li></ul>`,
  },
  // K
  {
    name: "kill",
    desc: "Send a signal to a process.",
    gif: "https://placehold.co/600x400/333/fff?text=kill",
    explanation: `<p>The <b>kill</b> command is used to terminate a process using its Process ID (PID).</p><ul><li><b>kill 12345</b>: Terminates the process with PID 12345.</li><li><b>kill -9 12345</b>: Forcefully kills the process.</li></ul>`,
  },
  {
    name: "killall",
    desc: "Kill processes by name.",
    gif: "https://placehold.co/600x400/333/fff?text=killall",
    explanation: `<p>The <b>killall</b> command kills processes based on their name, rather than their PID.</p><ul><li><b>killall firefox</b>: Kills all processes named 'firefox'.</li></ul>`,
  },
  // L
  {
    name: "less",
    desc: "View file content one page at a time.",
    gif: "https://placehold.co/600x400/333/fff?text=less",
    explanation: `<p>The <b>less</b> command is a file viewer that allows you to scroll up and down through a file.</p><ul><li><b>less largefile.log</b>: Opens the file for viewing.</li></ul>`,
  },
  {
    name: "ln",
    desc: "Create links between files.",
    gif: "https://placehold.co/600x400/333/fff?text=ln",
    explanation: `<p>The <b>ln</b> command creates links (shortcuts) between files.</p><ul><li><b>ln -s /path/to/original /path/to/link</b>: Creates a symbolic (soft) link.</li></ul>`,
  },
  {
    name: "locate",
    desc: "Find files by name, faster than find.",
    gif: "https://placehold.co/600x400/333/fff?text=locate",
    explanation: `<p>The <b>locate</b> command finds files by name using a pre-built database.</p><ul><li><b>sudo updatedb</b>: Updates the database.</li><li><b>locate filename.txt</b>: Finds files.</li></ul>`,
  },
  {
    name: "lsof",
    desc: "List open files.",
    gif: "https://placehold.co/600x400/333/fff?text=lsof",
    explanation: `<p>The <b>lsof</b> command lists information about files that are currently open by processes.</p><ul><li><b>lsof -i :80</b>: Shows which process is using port 80.</li></ul>`,
  },
  {
    name: "ls",
    desc: "List directory contents.",
    gif: "https://i.imgur.com/3yS3b3Y.gif",
    explanation: `<p>The <b>ls</b> command lists the files and directories in your current location.</p><ul><li><b>ls -la</b>: Shows a long listing of all files, including hidden ones.</li><li><b>ls -lh</b>: Shows human-readable file sizes.</li></ul>`,
  },
  {
    name: "lsblk",
    desc: "List block devices.",
    gif: "https://placehold.co/600x400/333/fff?text=lsblk",
    explanation: `<p>The <b>lsblk</b> command lists information about all available block devices (like hard drives and flash drives).</p><ul><li><b>lsblk</b>: Shows block devices.</li></ul>`,
  },
  // M
  {
    name: "man",
    desc: "Display the manual for a command.",
    gif: "https://placehold.co/600x400/333/fff?text=man",
    explanation: `<p>The <b>man</b> command displays the user manual for any command.</p><ul><li><b>man ls</b>: Shows the manual page for 'ls'.</li></ul>`,
  },
  {
    name: "mkdir",
    desc: "Make directories.",
    gif: "https://i.imgur.com/S8i6c6a.gif",
    explanation: `<p>The <b>mkdir</b> command is used to create a new directory.</p><ul><li><b>mkdir -p path/to/new/directory</b>: Creates all parent directories if they don't exist.</li></ul>`,
  },
  {
    name: "mount",
    desc: "Mount a filesystem.",
    gif: "https://placehold.co/600x400/333/fff?text=mount",
    explanation: `<p>The <b>mount</b> command is used to attach a storage device or filesystem to a directory.</p><ul><li><b>sudo mount /dev/sdb1 /mnt/data</b>: Mounts a partition.</li></ul>`,
  },
  {
    name: "mv",
    desc: "Move or rename files.",
    gif: "https://placehold.co/600x400/333/fff?text=mv",
    explanation: `<p>The <b>mv</b> command is used to move or rename a file.</p><ul><li><b>mv old.txt new.txt</b>: Renames a file.</li><li><b>mv file.txt /dir/</b>: Moves a file.</li></ul>`,
  },
  // N
  {
    name: "nc",
    desc: "Arbitrary TCP and UDP connections (netcat).",
    gif: "https://placehold.co/600x400/333/fff?text=nc",
    explanation: `<p><b>nc</b> (netcat) is a versatile networking utility for reading from and writing to network connections.</p><ul><li><b>nc -zv google.com 80</b>: Checks if port 80 is open on google.com.</li></ul>`,
  },
  {
    name: "netstat",
    desc: "Print network connections and stats.",
    gif: "https://placehold.co/600x400/333/fff?text=netstat",
    explanation: `<p>The <b>netstat</b> command displays network connections, routing tables, and interface statistics.</p><ul><li><b>netstat -tulpn</b>: A very common combination to see all listening ports and the processes using them.</li></ul>`,
  },
  {
    name: "nice",
    desc: "Run a program with modified priority.",
    gif: "https://placehold.co/600x400/333/fff?text=nice",
    explanation: `<p>The <b>nice</b> command runs a command with a different scheduling priority, affecting how much CPU time it gets.</p><ul><li><b>nice -n 10 ./my_script.sh</b>: Runs a script with a lower priority.</li></ul>`,
  },
  {
    name: "nohup",
    desc: "Run a command immune to hangups.",
    gif: "https://placehold.co/600x400/333/fff?text=nohup",
    explanation: `<p>The <b>nohup</b> command allows you to run a command that will continue running even after you log out.</p><ul><li><b>nohup ./long_running_script.sh &</b>: Runs a script in the background that won't be terminated on logout.</li></ul>`,
  },
  // P
  {
    name: "passwd",
    desc: "Change user password.",
    gif: "https://placehold.co/600x400/333/fff?text=passwd",
    explanation: `<p>The <b>passwd</b> command is used to change a user's password.</p><ul><li><b>passwd</b>: Changes your own password.</li><li><b>sudo passwd username</b>: Changes another user's password.</li></ul>`,
  },
  {
    name: "ping",
    desc: "Test the connection to a network host.",
    gif: "https://placehold.co/600x400/333/fff?text=ping",
    explanation: `<p>The <b>ping</b> command checks if a remote server is reachable over the network.</p><ul><li><b>ping -c 5 google.com</b>: Sends 5 packets and then stops.</li></ul>`,
  },
  {
    name: "ps",
    desc: "Report a snapshot of the current processes.",
    gif: "https://placehold.co/600x400/333/fff?text=ps",
    explanation: `<p>The <b>ps</b> command provides a snapshot of the currently running processes.</p><ul><li><b>ps aux</b>: Shows all running processes for all users.</li></ul>`,
  },
  {
    name: "pwd",
    desc: "Print name of current/working directory.",
    gif: "https://i.imgur.com/AY8Z3So.gif",
    explanation: `<p>The <b>pwd</b> command tells you the full path of the directory you are currently in.</p><ul><li><b>pwd</b>: Shows your current location.</li></ul>`,
  },
  // R
  {
    name: "reboot",
    desc: "Reboot the system.",
    gif: "https://placehold.co/600x400/333/fff?text=reboot",
    explanation: `<p>The <b>reboot</b> command stops all running processes and restarts the system. You usually need superuser privileges.</p><ul><li><b>sudo reboot</b>: Reboots the machine.</li></ul>`,
  },
  {
    name: "rm",
    desc: "Remove files or directories.",
    gif: "https://placehold.co/600x400/333/fff?text=rm",
    explanation: `<p>The <b>rm</b> command is used to delete files. Be very careful with this command.</p><ul><li><b>rm -r directory_name</b>: Deletes a directory and its contents.</li><li><b>rm -f filename.txt</b>: Forces deletion without prompting.</li></ul>`,
  },
  {
    name: "rmdir",
    desc: "Remove empty directories.",
    gif: "https://placehold.co/600x400/333/fff?text=rmdir",
    explanation: `<p>The <b>rmdir</b> command is used to delete directories, but only if they are empty.</p><ul><li><b>rmdir empty_directory</b>: Deletes the directory.</li></ul>`,
  },
  {
    name: "rsync",
    desc: "Fast, versatile file copying tool.",
    gif: "https://placehold.co/600x400/333/fff?text=rsync",
    explanation: `<p><b>rsync</b> is excellent for synchronizing files and directories between two locations, either locally or over a network.</p><ul><li><b>rsync -avh source/ destination/</b>: Synchronizes two directories.</li></ul>`,
  },
  // S
  {
    name: "scp",
    desc: "Securely copy files between hosts.",
    gif: "https://placehold.co/600x400/333/fff?text=scp",
    explanation: `<p>The <b>scp</b> command allows you to copy files over a network using SSH.</p><ul><li><b>scp file.txt user@remote:/path/</b>: Copies a local file to a remote server.</li></ul>`,
  },
  {
    name: "sed",
    desc: "Stream editor for filtering and transforming text.",
    gif: "https://placehold.co/600x400/333/fff?text=sed",
    explanation: `<p><b>sed</b> is a powerful stream editor for performing text transformations on an input stream.</p><ul><li><b>sed 's/old/new/g' file.txt</b>: Replaces all occurrences of 'old' with 'new'.</li></ul>`,
  },
  {
    name: "shutdown",
    desc: "Shut down the system.",
    gif: "https://placehold.co/600x400/333/fff?text=shutdown",
    explanation: `<p>The <b>shutdown</b> command brings the system down in a secure way.</p><ul><li><b>sudo shutdown now</b>: Shuts down the system immediately.</li><li><b>sudo shutdown -h +10</b>: Shuts down in 10 minutes.</li></ul>`,
  },
  {
    name: "sleep",
    desc: "Delay for a specified amount of time.",
    gif: "https://placehold.co/600x400/333/fff?text=sleep",
    explanation: `<p>The <b>sleep</b> command pauses for a specified amount of time. It's mainly used in scripts.</p><ul><li><b>sleep 5</b>: Pauses for 5 seconds.</li></ul>`,
  },
  {
    name: "sort",
    desc: "Sort lines of text files.",
    gif: "https://placehold.co/600x400/333/fff?text=sort",
    explanation: `<p>The <b>sort</b> command sorts the lines of a text file.</p><ul><li><b>sort -r filename.txt</b>: Sorts in reverse order.</li><li><b>sort -n numbers.txt</b>: Sorts numerically.</li></ul>`,
  },
  {
    name: "ssh",
    desc: "Secure Shell client (remote login program).",
    gif: "https://placehold.co/600x400/333/fff?text=ssh",
    explanation: `<p><b>ssh</b> is used to securely log into and control a remote computer over a network.</p><ul><li><b>ssh user@remotehost</b>: Connects to a remote server.</li></ul>`,
  },
  {
    name: "ssh-keygen",
    desc: "Authentication key generation.",
    gif: "https://placehold.co/600x400/333/fff?text=ssh-keygen",
    explanation: `<p>The <b>ssh-keygen</b> command is used to generate a new SSH key pair for passwordless authentication.</p><ul><li><b>ssh-keygen -t rsa</b>: Generates a new RSA key pair.</li></ul>`,
  },
  {
    name: "stat",
    desc: "Display file or file system status.",
    gif: "https://placehold.co/600x400/333/fff?text=stat",
    explanation: `<p>The <b>stat</b> command displays detailed information about a file, such as its size, permissions, and timestamps.</p><ul><li><b>stat filename.txt</b>: Shows status for a file.</li></ul>`,
  },
  {
    name: "sudo",
    desc: "Execute a command as another user.",
    gif: "https://placehold.co/600x400/333/fff?text=sudo",
    explanation: `<p>The <b>sudo</b> command allows a permitted user to execute a command as the superuser (root).</p><ul><li><b>sudo apt update</b>: Runs a command with root privileges.</li></ul>`,
  },
  {
    name: "systemctl",
    desc: "Control the systemd system and service manager.",
    gif: "https://placehold.co/600x400/333/fff?text=systemctl",
    explanation: `<p><b>systemctl</b> is the main tool for managing services on modern Linux systems.</p><ul><li><b>sudo systemctl status sshd</b>: Checks the status of the SSH service.</li><li><b>sudo systemctl start sshd</b>: Starts a service.</li></ul>`,
  },
  // T
  {
    name: "tail",
    desc: "Output the last part of files.",
    gif: "https://placehold.co/600x400/333/fff?text=tail",
    explanation: `<p>The <b>tail</b> command displays the last few lines of a file.</p><ul><li><b>tail -n 20 file.txt</b>: Shows the last 20 lines.</li><li><b>tail -f /var/log/syslog</b>: Follows a file in real-time.</li></ul>`,
  },
  {
    name: "tar",
    desc: "Store, list or extract files in an archive.",
    gif: "https://placehold.co/600x400/333/fff?text=tar",
    explanation: `<p>The <b>tar</b> command is used to create and extract tar archives (tarballs).</p><ul><li><b>tar -czvf archive.tar.gz /dir</b>: Creates a compressed archive.</li><li><b>tar -xzvf archive.tar.gz</b>: Extracts an archive.</li></ul>`,
  },
  {
    name: "tee",
    desc: "Read from stdin and write to stdout and files.",
    gif: "https://placehold.co/600x400/333/fff?text=tee",
    explanation: `<p>The <b>tee</b> command is used to split the output of a program, sending it to both the screen and a file.</p><ul><li><b>ls -l | tee file.txt</b>: Shows the output of 'ls -l' and saves it to 'file.txt'.</li></ul>`,
  },
  {
    name: "top",
    desc: "Display Linux processes.",
    gif: "https://placehold.co/600x400/333/fff?text=top",
    explanation: `<p>The <b>top</b> command provides a real-time view of the running processes on your system.</p><ul><li><b>top</b>: Starts the interactive viewer.</li></ul>`,
  },
  {
    name: "touch",
    desc: "Change file timestamps or create empty files.",
    gif: "https://placehold.co/600x400/333/fff?text=touch",
    explanation: `<p>The <b>touch</b> command is used to create an empty file or update the timestamp of an existing file.</p><ul><li><b>touch newfile.txt</b>: Creates an empty file.</li></ul>`,
  },
  {
    name: "traceroute",
    desc: "Print the route packets trace to network host.",
    gif: "https://placehold.co/600x400/333/fff?text=traceroute",
    explanation: `<p>The <b>traceroute</b> command shows the network path (hops) that packets take to reach a destination.</p><ul><li><b>traceroute google.com</b>: Shows the path to google.com.</li></ul>`,
  },
  {
    name: "tree",
    desc: "List contents of directories in a tree-like format.",
    gif: "https://placehold.co/600x400/333/fff?text=tree",
    explanation: `<p>The <b>tree</b> command lists the contents of a directory in a hierarchical, tree-like structure.</p><ul><li><b>tree /path/to/dir</b>: Shows the directory tree.</li></ul>`,
  },
  // U
  {
    name: "umount",
    desc: "Unmount file systems.",
    gif: "https://placehold.co/600x400/333/fff?text=umount",
    explanation: `<p>The <b>umount</b> command detaches a mounted filesystem from the directory tree.</p><ul><li><b>sudo umount /mnt/data</b>: Unmounts the device.</li></ul>`,
  },
  {
    name: "uname",
    desc: "Print system information.",
    gif: "https://placehold.co/600x400/333/fff?text=uname",
    explanation: `<p>The <b>uname</b> command prints basic information about your system and kernel.</p><ul><li><b>uname -a</b>: Prints all available system information.</li></ul>`,
  },
  {
    name: "uniq",
    desc: "Report or omit repeated lines.",
    gif: "https://placehold.co/600x400/333/fff?text=uniq",
    explanation: `<p>The <b>uniq</b> command is used to filter out adjacent, duplicate lines in a file.</p><ul><li><b>sort file.txt | uniq</b>: Shows only the unique lines from a file.</li></ul>`,
  },
  {
    name: "unzip",
    desc: "Extract compressed files in a ZIP archive.",
    gif: "https://placehold.co/600x400/333/fff?text=unzip",
    explanation: `<p>The <b>unzip</b> command is used to extract files from a .zip archive.</p><ul><li><b>unzip archive.zip</b>: Extracts the contents of the zip file.</li></ul>`,
  },
  {
    name: "uptime",
    desc: "Tell how long the system has been running.",
    gif: "https://placehold.co/600x400/333/fff?text=uptime",
    explanation: `<p>The <b>uptime</b> command shows how long the system has been running, the number of users, and the load average.</p>`,
  },
  {
    name: "useradd",
    desc: "Create a new user.",
    gif: "https://placehold.co/600x400/333/fff?text=useradd",
    explanation: `<p>The <b>useradd</b> command is used to create a new user account.</p><ul><li><b>sudo useradd -m newuser</b>: Creates a new user with a home directory.</li></ul>`,
  },
  {
    name: "userdel",
    desc: "Delete a user account.",
    gif: "https://placehold.co/600x400/333/fff?text=userdel",
    explanation: `<p>The <b>userdel</b> command is used to delete a user account.</p><ul><li><b>sudo userdel -r olduser</b>: Deletes a user and their home directory.</li></ul>`,
  },
  {
    name: "usermod",
    desc: "Modify a user account.",
    gif: "https://placehold.co/600x400/333/fff?text=usermod",
    explanation: `<p>The <b>usermod</b> command is used to modify an existing user account, such as adding them to a group.</p><ul><li><b>sudo usermod -aG sudo username</b>: Adds a user to the 'sudo' group.</li></ul>`,
  },
  // V
  {
    name: "vim",
    desc: "Vi IMproved, a programmer's text editor.",
    gif: "https://placehold.co/600x400/333/fff?text=vim",
    explanation: `<p><b>Vim</b> is a highly configurable and powerful text editor built to enable efficient text editing.</p><ul><li><b>vim filename.txt</b>: Opens a file in Vim.</li></ul>`,
  },
  // W
  {
    name: "w",
    desc: "Show who is logged on and what they are doing.",
    gif: "https://placehold.co/600x400/333/fff?text=w",
    explanation: `<p>The <b>w</b> command displays information about the users currently on the machine, and their processes.</p>`,
  },
  {
    name: "watch",
    desc: "Execute a program periodically.",
    gif: "https://placehold.co/600x400/333/fff?text=watch",
    explanation: `<p>The <b>watch</b> command runs another command repeatedly, displaying its output on the screen so you can see it change over time.</p><ul><li><b>watch -n 1 date</b>: Runs the 'date' command every second.</li></ul>`,
  },
  {
    name: "wc",
    desc: "Print newline, word, and byte counts.",
    gif: "https://placehold.co/600x400/333/fff?text=wc",
    explanation: `<p>The <b>wc</b> command is used to count the number of lines, words, and characters in a file.</p><ul><li><b>wc -l filename.txt</b>: Shows only the line count.</li></ul>`,
  },
  {
    name: "wget",
    desc: "Non-interactive network downloader.",
    gif: "https://placehold.co/600x400/333/fff?text=wget",
    explanation: `<p><b>wget</b> is a command-line utility for downloading files from the internet.</p><ul><li><b>wget https://example.com/file.iso</b>: Downloads a file.</li></ul>`,
  },
  {
    name: "which",
    desc: "Locate a command.",
    gif: "https://placehold.co/600x400/333/fff?text=which",
    explanation: `<p>The <b>which</b> command shows the full path of a command.</p><ul><li><b>which bash</b>: Shows where the 'bash' executable is located.</li></ul>`,
  },
  {
    name: "who",
    desc: "Show who is logged on.",
    gif: "https://placehold.co/600x400/333/fff?text=who",
    explanation: `<p>The <b>who</b> command displays a list of users who are currently logged into the computer.</p>`,
  },
  {
    name: "whoami",
    desc: "Print effective user ID.",
    gif: "https://placehold.co/600x400/333/fff?text=whoami",
    explanation: `<p>The <b>whoami</b> command prints the username of the current user.</p><ul><li><b>whoami</b>: Displays your username.</li></ul>`,
  },
  // X
  {
    name: "xargs",
    desc: "Build and execute command lines from standard input.",
    gif: "https://placehold.co/600x400/333/fff?text=xargs",
    explanation: `<p><b>xargs</b> is used to build and execute commands from standard input. It's often used with 'find'.</p><ul><li><b>find . -name "*.log" | xargs rm</b>: Finds all .log files and deletes them.</li></ul>`,
  },
  // Z
  {
    name: "zip",
    desc: "Package and compress (archive) files.",
    gif: "https://placehold.co/600x400/333/fff?text=zip",
    explanation: `<p>The <b>zip</b> command is used to create .zip archives.</p><ul><li><b>zip archive.zip file1.txt file2.txt</b>: Creates a zip file with two text files.</li></ul>`,
  },
];

const specialCommands = {
  nginx: [
    {
      name: "nginx -t",
      desc: "Test the Nginx configuration.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Tests the syntax of your Nginx configuration files for errors before you try to apply them.</p>`,
    },
    {
      name: "nginx -s reload",
      desc: "Reload Nginx configuration.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Gracefully reloads the Nginx configuration without dropping connections.</p>`,
    },
    {
      name: "nginx -v",
      desc: "Show Nginx version.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Prints the Nginx version.</p>`,
    },
    {
      name: "nginx -V",
      desc: "Show version and config options.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Prints the Nginx version, compiler version, and configure script parameters.</p>`,
    },
    {
      name: "systemctl start nginx",
      desc: "Start the Nginx service.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Starts the Nginx web server using systemd.</p>`,
    },
    {
      name: "systemctl stop nginx",
      desc: "Stop the Nginx service.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Stops the Nginx web server using systemd.</p>`,
    },
    {
      name: "systemctl restart nginx",
      desc: "Restart the Nginx service.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Restarts the Nginx web server.</p>`,
    },
    {
      name: "systemctl status nginx",
      desc: "Get the status of Nginx.",
      gif: "https://placehold.co/600x400/333/fff?text=nginx",
      explanation: `<p>Checks if the Nginx service is running.</p>`,
    },
  ],
  apache: [
    {
      name: "apache2ctl -t",
      desc: "Test the Apache configuration.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Checks your Apache configuration files for syntax errors.</p>`,
    },
    {
      name: "apache2ctl -v",
      desc: "Show Apache version.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Prints the Apache version and build date.</p>`,
    },
    {
      name: "a2ensite",
      desc: "Enable an Apache site.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Enables a virtual host configuration.</p><ul><li><b>sudo a2ensite example.com.conf</b></li></ul>`,
    },
    {
      name: "a2dissite",
      desc: "Disable an Apache site.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Disables a virtual host configuration.</p><ul><li><b>sudo a2dissite example.com.conf</b></li></ul>`,
    },
    {
      name: "a2enmod",
      desc: "Enable an Apache module.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Enables a specific Apache module.</p><ul><li><b>sudo a2enmod rewrite</b></li></ul>`,
    },
    {
      name: "a2dismod",
      desc: "Disable an Apache module.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Disables a specific Apache module.</p><ul><li><b>sudo a2dismod rewrite</b></li></ul>`,
    },
    {
      name: "systemctl start apache2",
      desc: "Start the Apache service.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Starts the Apache web server using systemd.</p>`,
    },
    {
      name: "systemctl stop apache2",
      desc: "Stop the Apache service.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Stops the Apache web server using systemd.</p>`,
    },
    {
      name: "systemctl reload apache2",
      desc: "Reload Apache configuration.",
      gif: "https://placehold.co/600x400/333/fff?text=apache",
      explanation: `<p>Gracefully reloads the Apache configuration.</p>`,
    },
  ],
  git: [
    {
      name: "git init",
      desc: "Create an empty Git repository.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Initializes a new Git repository in the current directory.</p>`,
    },
    {
      name: "git clone",
      desc: "Clone a repository into a new directory.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Copies an existing Git repository from a URL.</p>`,
    },
    {
      name: "git add",
      desc: "Add file contents to the index.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Stages changes in your working directory for the next commit.</p><ul><li><b>git add .</b>: Stages all changes.</li></ul>`,
    },
    {
      name: "git commit",
      desc: "Record changes to the repository.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Saves your staged changes to the project's history.</p><ul><li><b>git commit -m "Your message"</b>: Commits with a message.</li></ul>`,
    },
    {
      name: "git push",
      desc: "Update remote refs with local ones.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Uploads your committed changes to a remote repository.</p>`,
    },
    {
      name: "git pull",
      desc: "Fetch from and integrate with another repository.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Downloads changes from a remote repository and merges them into your current branch.</p>`,
    },
    {
      name: "git status",
      desc: "Show the working tree status.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Displays the state of the working directory and the staging area.</p>`,
    },
    {
      name: "git branch",
      desc: "List, create, or delete branches.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Manages your branches.</p><ul><li><b>git branch new-feature</b>: Creates a new branch.</li></ul>`,
    },
    {
      name: "git checkout",
      desc: "Switch branches or restore working tree files.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Used to switch between different branches in your repository.</p><ul><li><b>git checkout feature-branch</b></li></ul>`,
    },
    {
      name: "git merge",
      desc: "Join two or more development histories together.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Merges changes from another branch into your current branch.</p>`,
    },
    {
      name: "git log",
      desc: "Show commit logs.",
      gif: "https://placehold.co/600x400/333/fff?text=git",
      explanation: `<p>Displays the history of commits for the current branch.</p>`,
    },
  ],
  docker: [
    {
      name: "docker run",
      desc: "Run a command in a new container.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Creates and starts a new container from an image.</p><ul><li><b>docker run -it ubuntu bash</b>: Starts an interactive bash shell in an Ubuntu container.</li></ul>`,
    },
    {
      name: "docker ps",
      desc: "List containers.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Shows all running containers.</p><ul><li><b>docker ps -a</b>: Shows all containers, including stopped ones.</li></ul>`,
    },
    {
      name: "docker build",
      desc: "Build an image from a Dockerfile.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Creates a Docker image based on the instructions in a Dockerfile.</p><ul><li><b>docker build -t my-image .</b>: Builds and tags an image from the current directory.</li></ul>`,
    },
    {
      name: "docker images",
      desc: "List images.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Shows all the Docker images stored on your local machine.</p>`,
    },
    {
      name: "docker exec",
      desc: "Run a command in a running container.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Allows you to execute a command inside a container that is already running.</p><ul><li><b>docker exec -it [container_id] bash</b>: Opens a shell inside a running container.</li></ul>`,
    },
    {
      name: "docker stop",
      desc: "Stop one or more running containers.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Stops a running container gracefully.</p>`,
    },
    {
      name: "docker rm",
      desc: "Remove one or more containers.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Deletes a stopped container.</p>`,
    },
    {
      name: "docker rmi",
      desc: "Remove one or more images.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Deletes a Docker image from your local machine.</p>`,
    },
    {
      name: "docker-compose up",
      desc: "Create and start containers.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Builds, (re)creates, starts, and attaches to containers for a service defined in docker-compose.yml.</p><ul><li><b>docker-compose up -d</b>: Runs containers in detached mode.</li></ul>`,
    },
    {
      name: "docker-compose down",
      desc: "Stop and remove containers.",
      gif: "https://placehold.co/600x400/333/fff?text=docker",
      explanation: `<p>Stops and removes the containers, networks, and volumes created by 'up'.</p>`,
    },
  ],
  kubectl: [
    {
      name: "kubectl get pods",
      desc: "List all pods.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Lists all the pods in the current Kubernetes namespace.</p><ul><li><b>kubectl get pods -n [namespace]</b>: Lists pods in a specific namespace.</li></ul>`,
    },
    {
      name: "kubectl get nodes",
      desc: "List all nodes in the cluster.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Shows the status of all nodes in your Kubernetes cluster.</p>`,
    },
    {
      name: "kubectl get services",
      desc: "List all services.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Lists all services in the current namespace.</p>`,
    },
    {
      name: "kubectl describe pod",
      desc: "Show detailed state of a pod.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Provides detailed information about a specific pod, useful for debugging.</p>`,
    },
    {
      name: "kubectl apply",
      desc: "Apply a configuration to a resource.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Creates or updates resources from a YAML file.</p><ul><li><b>kubectl apply -f deployment.yaml</b>: Applies the configuration.</li></ul>`,
    },
    {
      name: "kubectl delete",
      desc: "Delete resources.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Deletes Kubernetes resources.</p><ul><li><b>kubectl delete pod [pod-name]</b>: Deletes a specific pod.</li></ul>`,
    },
    {
      name: "kubectl logs",
      desc: "Print the logs for a pod.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Streams the logs from a pod.</p><ul><li><b>kubectl logs -f [pod-name]</b>: Follows the log stream in real-time.</li></ul>`,
    },
    {
      name: "kubectl exec",
      desc: "Execute a command in a container.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Allows you to run a command inside a running container within a pod.</p><ul><li><b>kubectl exec -it [pod-name] -- /bin/sh</b>: Opens a shell inside the container.</li></ul>`,
    },
    {
      name: "kubectl config view",
      desc: "Display merged kubeconfig settings.",
      gif: "https://placehold.co/600x400/333/fff?text=kubectl",
      explanation: `<p>Shows your current Kubernetes configuration.</p>`,
    },
  ],
  mysql: [
    {
      name: "mysql -u [user] -p",
      desc: "Connect to a MySQL server.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Connects to a MySQL database server as a specified user, prompting for a password.</p>`,
    },
    {
      name: "SHOW DATABASES;",
      desc: "List all databases.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Lists all the databases that the current user has permission to see.</p>`,
    },
    {
      name: "USE [database];",
      desc: "Select a database to use.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Sets the current database for subsequent queries.</p>`,
    },
    {
      name: "SHOW TABLES;",
      desc: "List all tables in the database.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Displays all the tables in the currently selected database.</p>`,
    },
    {
      name: "DESCRIBE [table];",
      desc: "Show the structure of a table.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Shows information about the columns in a table, such as their names and data types.</p>`,
    },
    {
      name: "SELECT",
      desc: "Retrieve data from a database.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>The fundamental command for querying data.</p><ul><li><b>SELECT * FROM users;</b>: Retrieves all records from the 'users' table.</li></ul>`,
    },
    {
      name: "INSERT INTO",
      desc: "Insert new rows into a table.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Adds new records to a table.</p><ul><li><b>INSERT INTO users (name, email) VALUES ('John', 'john@example.com');</b></li></ul>`,
    },
    {
      name: "UPDATE",
      desc: "Modify existing rows in a table.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Changes existing data in a table.</p><ul><li><b>UPDATE users SET email = 'new@example.com' WHERE name = 'John';</b></li></ul>`,
    },
    {
      name: "DELETE FROM",
      desc: "Delete rows from a table.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Removes records from a table.</p><ul><li><b>DELETE FROM users WHERE name = 'John';</b></li></ul>`,
    },
    {
      name: "mysqldump",
      desc: "A database backup program.",
      gif: "https://placehold.co/600x400/333/fff?text=mysql",
      explanation: `<p>Used to create a backup of a database or collection of databases.</p><ul><li><b>mysqldump -u [user] -p [database] > backup.sql</b></li></ul>`,
    },
  ],
  cuda: [
    {
      name: "nvidia-smi",
      desc: "Monitor NVIDIA GPU devices.",
      gif: "https://placehold.co/600x400/333/fff?text=cuda",
      explanation: `<p>The <b>NVIDIA System Management Interface</b> is a command-line utility for monitoring and managing NVIDIA GPU devices.</p><ul><li><b>nvidia-smi -l 1</b>: Continuously monitor GPU stats every second.</li></ul>`,
    },
    {
      name: "nvcc --version",
      desc: "Show the CUDA compiler version.",
      gif: "https://placehold.co/600x400/333/fff?text=cuda",
      explanation: `<p>Displays the version of the NVIDIA CUDA Compiler (NVCC).</p>`,
    },
    {
      name: "deviceQuery",
      desc: "Show detailed GPU information.",
      gif: "https://placehold.co/600x400/333/fff?text=cuda",
      explanation: `<p>A sample program from the CUDA Toolkit that enumerates and displays detailed information about the CUDA-enabled devices in the system.</p>`,
    },
    {
      name: "bandwidthTest",
      desc: "Test GPU memory bandwidth.",
      gif: "https://placehold.co/600x400/333/fff?text=cuda",
      explanation: `<p>A sample program from the CUDA Toolkit that measures the memory bandwidth between the host and the device, and within the device itself.</p>`,
    },
  ],
};

let currentCommandSet = azCommands; // Default to A-Z commands

// --- DYNAMIC CONTENT & EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("commandsGrid");
  const searchInput = document.getElementById("searchInput");
  const findCommandBtn = document.getElementById("findCommandBtn");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const azFilterContainer = document.getElementById("azFilterContainer");
  const specialMenuBtn = document.getElementById("specialMenuBtn");
  const specialMenuDropdown = document.getElementById("specialMenuDropdown");

  // --- Menu Logic ---
  specialMenuBtn.addEventListener("click", () => {
    specialMenuDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!document.getElementById("specialMenuContainer").contains(e.target)) {
      specialMenuDropdown.classList.add("hidden");
    }
  });

  specialMenuDropdown.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      const category = e.target.dataset.category;
      if (category === "az") {
        currentCommandSet = azCommands;
        azFilterContainer.style.display = "block";
        populateGrid(currentCommandSet);
        // Reset A-Z filter to 'All'
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        document.querySelector(".filter-btn").classList.add("active");
      } else {
        currentCommandSet = specialCommands[category];
        azFilterContainer.style.display = "none"; // Hide A-Z filter for special commands
        populateGrid(currentCommandSet);
      }
      specialMenuDropdown.classList.add("hidden");
    }
  });

  // --- A-Z Filter Logic ---
  const azFilter = document.getElementById("azFilter");
  const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  alphabet.forEach((letter) => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.className = "filter-btn";
    if (letter === "All") btn.classList.add("active");
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (letter === "All") {
        populateGrid(azCommands);
      } else {
        const filteredCommands = azCommands.filter((c) =>
          c.name.toUpperCase().startsWith(letter)
        );
        populateGrid(filteredCommands);
      }
    });
    azFilter.appendChild(btn);
  });

  // Initial population of the grid
  populateGrid(currentCommandSet);

  // Add event listeners
  searchInput.addEventListener("keyup", searchCommands);
  findCommandBtn.addEventListener("click", findCommand);
  darkModeToggle.addEventListener("click", () => {
    const isDark = htmlElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

// --- FUNCTIONS ---

function populateGrid(commandList) {
  const grid = document.getElementById("commandsGrid");
  grid.innerHTML = "";

  commandList.forEach((command) => {
    const card = document.createElement("div");
    card.className =
      "command-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden";
    card.innerHTML = `
            <div class="p-6 card-content">
                <h2 class="text-2xl font-bold mb-2 dark:text-white">${command.name}</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${command.desc}</p>
                <button class="explain-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    ✨ Explain This
                </button>
                <div class="explanation-container mt-4"></div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700/50 p-4">
                <img src="${command.gif}" alt="${command.name} command gif" class="w-full rounded-md" onerror="this.onerror=null;this.src='https://placehold.co/600x400/000000/FFFFFF?text=${command.name}+command';">
            </div>
        `;
    card.querySelector(".explain-btn").addEventListener("click", function () {
      getExplanation(command.name, this);
    });
    grid.appendChild(card);
  });

  const cards = grid.querySelectorAll(".command-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, index * 50);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach((card) => observer.observe(card));
}

function searchCommands() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  const filteredCommands = currentCommandSet.filter((c) =>
    c.name.toLowerCase().includes(input)
  );
  populateGrid(filteredCommands);

  if (document.getElementById("azFilterContainer").style.display !== "none") {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
  }
}

async function findCommand() {
  const userInput = document.getElementById("naturalInput").value;
  const resultContainer = document.getElementById("finderResult");

  if (!userInput.trim()) {
    resultContainer.innerHTML = `<div class="explanation-box visible text-yellow-800" style="background-color: #fefce8; border-left-color: #facc15;">Please describe what you want to do.</div>`;
    return;
  }

  resultContainer.innerHTML = '<div class="loader"></div>';

  const prompt = `You are a Linux command expert. A user wants to perform a task. Based on their description, provide the single most appropriate Linux command or a short, piped command chain to accomplish it. Explain briefly what the command does.

User's task: "${userInput}"

Your response should be in HTML format. Provide the command inside a <pre><code> block for proper formatting, and the explanation in a paragraph below it.`;

  const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
  const payload = { contents: chatHistory };

  try {
    const response = await fetch("/api/gemini-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();

    let resultText = "Sorry, I couldn't find a command for that right now.";
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      resultText = result.candidates[0].content.parts[0].text;
    }

    resultContainer.innerHTML = `<div class="explanation-box visible">${resultText}</div>`;
  } catch (error) {
    console.error("Error finding command:", error);
    resultContainer.innerHTML = `<div class="explanation-box visible text-red-700">Error: Could not process request. Please try again later.</div>`;
  }
}

function getExplanation(commandName, buttonElement) {
  const explanationContainer = buttonElement.nextElementSibling;

  if (explanationContainer.innerHTML.trim() !== "") {
    explanationContainer.innerHTML = "";
    return;
  }

  // Combine all command arrays into one for a comprehensive search
  const allCommands = [...azCommands, ...Object.values(specialCommands).flat()];

  const command = allCommands.find((c) => c.name === commandName);

  if (command && command.explanation) {
    const explanationBox = document.createElement("div");
    explanationBox.className = "explanation-box";
    explanationBox.innerHTML = command.explanation;

    explanationContainer.appendChild(explanationBox);

    setTimeout(() => {
      explanationBox.classList.add("visible");
    }, 10);
  } else {
    explanationContainer.innerHTML = `<div class="explanation-box visible text-yellow-800">Explanation not available.</div>`;
  }
}
