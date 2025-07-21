// --- DATA ---
const commands = [
  {
    name: "alias",
    desc: "Create a shortcut for a longer command.",
    gif: "https://placehold.co/600x400/333/fff?text=alias",
    explanation: `<p>The <b>alias</b> command lets you create temporary shortcuts for longer commands. This can save a lot of typing for commands you use frequently.</p><ul><li><b>alias name='command'</b>: Creates a new alias.</li><li><b>unalias name</b>: Removes an alias.</li><li><b>alias</b>: Lists all currently defined aliases.</li></ul>`,
  },
  {
    name: "cat",
    desc: "Concatenate and display files.",
    gif: "https://placehold.co/600x400/333/fff?text=cat",
    explanation: `<p>The <b>cat</b> command is most often used to display the contents of a file to the screen. It can also be used to combine (concatenate) multiple files.</p><ul><li><b>cat filename.txt</b>: Displays the content of the file.</li><li><b>cat file1.txt file2.txt > newfile.txt</b>: Combines two files into a new one.</li><li><b>cat -n filename.txt</b>: Displays file content with line numbers.</li></ul>`,
  },
  {
    name: "cd",
    desc: "Change the current directory.",
    gif: "https://i.imgur.com/9qK9bYF.gif",
    explanation: `<p>The <b>cd</b> (change directory) command is used to navigate between folders in your file system.</p><ul><li><b>cd /path/to/directory</b>: Navigates to a specific folder.</li><li><b>cd ..</b>: Moves up one directory level.</li><li><b>cd ~</b> or <b>cd</b>: Navigates to the home directory.</li></ul>`,
  },
  {
    name: "chmod",
    desc: "Change file access permissions.",
    gif: "https://placehold.co/600x400/333/fff?text=chmod",
    explanation: `<p>The <b>chmod</b> command changes the access permissions (read, write, execute) of files and directories.</p><ul><li><b>chmod +x script.sh</b>: Makes a script executable.</li><li><b>chmod 755 filename</b>: Sets read/write/execute for the owner, and read/execute for group and others.</li><li><b>chmod -R 644 /path/to/dir</b>: Recursively sets permissions for all files in a directory.</li></ul>`,
  },
  {
    name: "chown",
    desc: "Change file owner and group.",
    gif: "https://placehold.co/600x400/333/fff?text=chown",
    explanation: `<p>The <b>chown</b> command is used to change the ownership of a file or directory to a specific user or group.</p><ul><li><b>chown user:group filename</b>: Changes both the user and group owner.</li><li><b>chown user filename</b>: Changes only the user owner.</li><li><b>chown -R user:group /path/to/dir</b>: Recursively changes ownership for a directory and its contents.</li></ul>`,
  },
  {
    name: "cp",
    desc: "Copy files and directories.",
    gif: "https://placehold.co/600x400/333/fff?text=cp",
    explanation: `<p>The <b>cp</b> command is used to copy files or directories from one location to another.</p><ul><li><b>cp source.txt destination.txt</b>: Copies and renames a file.</li><li><b>cp file.txt /path/to/dir/</b>: Copies a file into a directory.</li><li><b>cp -r source_dir/ destination_dir/</b>: Copies an entire directory recursively.</li></ul>`,
  },
  {
    name: "curl",
    desc: "Transfer data from or to a server.",
    gif: "https://placehold.co/600x400/333/fff?text=curl",
    explanation: `<p><b>curl</b> is a powerful tool for transferring data with URLs. It's often used for testing APIs or downloading files from the command line.</p><ul><li><b>curl https://example.com</b>: Displays the HTML content of a website.</li><li><b>curl -O https://example.com/file.zip</b>: Downloads a file to the current directory.</li><li><b>curl -L url</b>: Follows redirects to the final destination.</li></ul>`,
  },
  {
    name: "df",
    desc: "Display free disk space.",
    gif: "https://placehold.co/600x400/333/fff?text=df",
    explanation: `<p>The <b>df</b> (disk free) command reports the amount of available disk space being used by file systems.</p><ul><li><b>df -h</b>: Displays the output in a human-readable format (KB, MB, GB).</li><li><b>df -a</b>: Shows all file systems, including virtual ones.</li><li><b>df .</b>: Shows the disk space of the file system the current directory is on.</li></ul>`,
  },
  {
    name: "diff",
    desc: "Compare files line by line.",
    gif: "https://placehold.co/600x400/333/fff?text=diff",
    explanation: `<p>The <b>diff</b> command analyzes two files and prints the lines that are different. It's essential for seeing changes between file versions.</p><ul><li><b>diff file1.txt file2.txt</b>: Shows the differences between two files.</li><li><b>diff -u file1.txt file2.txt</b>: Provides output in a unified format, which is easier to read.</li><li><b>diff -r dir1/ dir2/</b>: Compares two directories recursively.</li></ul>`,
  },
  {
    name: "du",
    desc: "Estimate file space usage.",
    gif: "https://placehold.co/600x400/333/fff?text=du",
    explanation: `<p>The <b>du</b> (disk usage) command shows how much space is used by files and directories.</p><ul><li><b>du -h /path/to/dir</b>: Shows disk usage in human-readable format.</li><li><b>du -sh /path/to/dir</b>: Shows only the grand total size of the directory.</li><li><b>du -a</b>: Shows disk usage for all files, not just directories.</li></ul>`,
  },
  {
    name: "find",
    desc: "Search for files in a directory hierarchy.",
    gif: "https://placehold.co/600x400/333/fff?text=find",
    explanation: `<p>The <b>find</b> command is a powerful utility for searching for files and directories based on various criteria like name, size, modification time, etc.</p><ul><li><b>find . -name "*.txt"</b>: Finds all files ending with .txt in the current directory and subdirectories.</li><li><b>find /home -user username</b>: Finds all files owned by a specific user.</li><li><b>find . -type d</b>: Finds only directories.</li></ul>`,
  },
  {
    name: "free",
    desc: "Display amount of free and used memory.",
    gif: "https://placehold.co/600x400/333/fff?text=free",
    explanation: `<p>The <b>free</b> command provides a quick look at the total, used, and free memory (RAM and swap) on the system.</p><ul><li><b>free -h</b>: Displays memory in human-readable format (e.g., GB, MB).</li><li><b>free -s 5</b>: Updates the memory information every 5 seconds.</li><li><b>free -t</b>: Shows a line with the total columns.</li></ul>`,
  },
  {
    name: "grep",
    desc: "Print lines matching a pattern.",
    gif: "https://placehold.co/600x400/333/fff?text=grep",
    explanation: `<p><b>grep</b> is one of the most useful Linux commands. It searches for a specific pattern of text inside files.</p><ul><li><b>grep "error" logfile.txt</b>: Searches for the word "error" in a log file.</li><li><b>grep -i "pattern" file</b>: Performs a case-insensitive search.</li><li><b>grep -r "pattern" /path/to/dir</b>: Searches recursively through all files in a directory.</li></ul>`,
  },
  {
    name: "head",
    desc: "Output the first part of files.",
    gif: "https://placehold.co/600x400/333/fff?text=head",
    explanation: `<p>The <b>head</b> command is used to display the first few lines of a file. By default, it shows the first 10 lines.</p><ul><li><b>head filename.txt</b>: Shows the first 10 lines.</li><li><b>head -n 20 filename.txt</b>: Shows the first 20 lines.</li><li><b>head -c 100 filename.txt</b>: Shows the first 100 bytes of the file.</li></ul>`,
  },
  {
    name: "history",
    desc: "Display the command history list.",
    gif: "https://placehold.co/600x400/333/fff?text=history",
    explanation: `<p>The <b>history</b> command displays a list of the commands you have previously run in the current terminal session.</p><ul><li><b>history</b>: Shows the entire command history.</li><li><b>history 10</b>: Shows the last 10 commands.</li><li><b>!123</b>: Executes the command with history number 123.</li></ul>`,
  },
  {
    name: "kill",
    desc: "Send a signal to a process.",
    gif: "https://placehold.co/600x400/333/fff?text=kill",
    explanation: `<p>The <b>kill</b> command is used to terminate a process. You need the Process ID (PID) of the process you want to stop.</p><ul><li><b>kill 12345</b>: Sends a termination signal to the process with PID 12345.</li><li><b>kill -9 12345</b>: Forcefully kills the process. This should be used as a last resort.</li><li><b>killall process_name</b>: Kills all processes with a specific name.</li></ul>`,
  },
  {
    name: "less",
    desc: "View file content one page at a time.",
    gif: "https://placehold.co/600x400/333/fff?text=less",
    explanation: `<p>The <b>less</b> command is an improved file viewer that allows you to scroll up and down through a file. It's better than 'cat' for large files.</p><ul><li><b>less largefile.log</b>: Opens the file for viewing.</li><li><b>/search-term</b>: Inside less, this searches for a term.</li><li><b>q</b>: Quits the less viewer.</li></ul>`,
  },
  {
    name: "ln",
    desc: "Create links between files.",
    gif: "https://placehold.co/600x400/333/fff?text=ln",
    explanation: `<p>The <b>ln</b> command creates links (or shortcuts) between files. There are two types: hard links and symbolic (soft) links.</p><ul><li><b>ln -s /path/to/original /path/to/link</b>: Creates a symbolic link. This is the most common use.</li><li><b>ln /path/to/original /path/to/link</b>: Creates a hard link.</li></ul>`,
  },
  {
    name: "locate",
    desc: "Find files by name, faster than find.",
    gif: "https://placehold.co/600x400/333/fff?text=locate",
    explanation: `<p>The <b>locate</b> command finds files by name using a pre-built database, which makes it much faster than 'find'.</p><ul><li><b>locate filename.txt</b>: Finds all files with that name.</li><li><b>sudo updatedb</b>: Updates the database used by 'locate'. Run this if 'locate' can't find a new file.</li><li><b>locate -i "*.jpg"</b>: Performs a case-insensitive search for all JPG files.</li></ul>`,
  },
  {
    name: "ls",
    desc: "List directory contents.",
    gif: "https://i.imgur.com/3yS3b3Y.gif",
    explanation: `<p>The <b>ls</b> command is one of the first commands you'll learn. It lists the files and directories in your current location.</p><ul><li><b>ls -l</b>: Shows a long listing with details like permissions, owner, size, and modification date.</li><li><b>ls -a</b>: Shows all files, including hidden files that start with a dot (.).</li><li><b>ls -lh</b>: Combines the long listing with human-readable file sizes (e.g., KB, MB).</li></ul>`,
  },
  {
    name: "man",
    desc: "Display the manual for a command.",
    gif: "https://placehold.co/600x400/333/fff?text=man",
    explanation: `<p>The <b>man</b> (manual) command displays the user manual for any command that has one. It's your built-in help guide.</p><ul><li><b>man ls</b>: Shows the manual page for the 'ls' command.</li><li><b>man -k keyword</b>: Searches for manual pages related to a keyword.</li></ul>`,
  },
  {
    name: "mkdir",
    desc: "Make directories.",
    gif: "https://i.imgur.com/S8i6c6a.gif",
    explanation: `<p>The <b>mkdir</b> command is used to create a new directory (or folder).</p><ul><li><b>mkdir new_directory</b>: Creates a new directory in the current location.</li><li><b>mkdir -p path/to/new/directory</b>: Creates all parent directories in the path if they don't already exist.</li></ul>`,
  },
  {
    name: "mv",
    desc: "Move or rename files.",
    gif: "https://placehold.co/600x400/333/fff?text=mv",
    explanation: `<p>The <b>mv</b> command is used to either move a file to a different directory or to rename a file.</p><ul><li><b>mv old_filename.txt new_filename.txt</b>: Renames a file.</li><li><b>mv file.txt /path/to/destination/</b>: Moves a file to a new directory.</li></ul>`,
  },
  {
    name: "ping",
    desc: "Test the connection to a network host.",
    gif: "https://placehold.co/600x400/333/fff?text=ping",
    explanation: `<p>The <b>ping</b> command is used to check if a remote server or computer is reachable over the network.</p><ul><li><b>ping google.com</b>: Sends packets to google.com to check for a response.</li><li><b>ping -c 5 google.com</b>: Sends exactly 5 packets and then stops.</li></ul>`,
  },
  {
    name: "ps",
    desc: "Report a snapshot of the current processes.",
    gif: "https://placehold.co/600x400/333/fff?text=ps",
    explanation: `<p>The <b>ps</b> command provides a snapshot of the currently running processes on the system.</p><ul><li><b>ps aux</b>: Shows all running processes for all users in a detailed format.</li><li><b>ps -ef</b>: Another common way to see all running processes.</li><li><b>ps -u username</b>: Shows processes run by a specific user.</li></ul>`,
  },
  {
    name: "pwd",
    desc: "Print name of current/working directory.",
    gif: "https://i.imgur.com/AY8Z3So.gif",
    explanation: `<p>The <b>pwd</b> (print working directory) command tells you the full path of the directory you are currently in.</p><ul><li><b>pwd</b>: Simply running the command shows your current location.</li></ul>`,
  },
  {
    name: "rm",
    desc: "Remove files or directories.",
    gif: "https://placehold.co/600x400/333/fff?text=rm",
    explanation: `<p>The <b>rm</b> command is used to delete files. Be very careful with this command, as deleted files are generally not recoverable.</p><ul><li><b>rm filename.txt</b>: Deletes a file.</li><li><b>rm -r directory_name</b>: Deletes a directory and all its contents recursively.</li><li><b>rm -f filename.txt</b>: Forces the deletion without prompting for confirmation.</li></ul>`,
  },
  {
    name: "rmdir",
    desc: "Remove empty directories.",
    gif: "https://placehold.co/600x400/333/fff?text=rmdir",
    explanation: `<p>The <b>rmdir</b> command is used to delete directories, but it will only work if the directory is completely empty.</p><ul><li><b>rmdir empty_directory</b>: Deletes the directory if it contains no files or subdirectories.</li></ul>`,
  },
  {
    name: "scp",
    desc: "Securely copy files between hosts.",
    gif: "https://placehold.co/600x400/333/fff?text=scp",
    explanation: `<p>The <b>scp</b> (secure copy) command allows you to copy files over a network connection using the SSH protocol, ensuring the transfer is encrypted.</p><ul><li><b>scp file.txt user@remotehost:/path/</b>: Copies a local file to a remote server.</li><li><b>scp user@remotehost:/path/file.txt .</b>: Copies a remote file to the local machine.</li></ul>`,
  },
  {
    name: "sort",
    desc: "Sort lines of text files.",
    gif: "https://placehold.co/600x400/333/fff?text=sort",
    explanation: `<p>The <b>sort</b> command sorts the lines of a text file alphabetically or numerically.</p><ul><li><b>sort filename.txt</b>: Displays the sorted content of the file.</li><li><b>sort -r filename.txt</b>: Sorts the file in reverse order.</li><li><b>sort -n numbers.txt</b>: Sorts a file with numbers in numerical order.</li></ul>`,
  },
  {
    name: "ssh",
    desc: "Secure Shell client (remote login program).",
    gif: "https://placehold.co/600x400/333/fff?text=ssh",
    explanation: `<p><b>ssh</b> is used to securely log into and control a remote computer over a network. All communication is encrypted.</p><ul><li><b>ssh user@remotehost</b>: Connects to a remote server as a specific user.</li><li><b>ssh -p 2222 user@remotehost</b>: Connects using a specific port number.</li></ul>`,
  },
  {
    name: "sudo",
    desc: "Execute a command as another user.",
    gif: "https://placehold.co/600x400/333/fff?text=sudo",
    explanation: `<p>The <b>sudo</b> command allows a permitted user to execute a command as the superuser (root) or another user, as specified by the security policy.</p><ul><li><b>sudo apt update</b>: Runs the 'apt update' command with root privileges.</li><li><b>sudo -l</b>: Lists the commands you are allowed to run with sudo.</li></ul>`,
  },
  {
    name: "tail",
    desc: "Output the last part of files.",
    gif: "https://placehold.co/600x400/333/fff?text=tail",
    explanation: `<p>The <b>tail</b> command is the opposite of 'head'. It displays the last few lines of a file, which is very useful for reading log files.</p><ul><li><b>tail filename.txt</b>: Shows the last 10 lines.</li><li><b>tail -n 20 filename.txt</b>: Shows the last 20 lines.</li><li><b>tail -f /var/log/syslog</b>: Follows the file, showing new lines as they are added in real-time.</li></ul>`,
  },
  {
    name: "tar",
    desc: "Store, list or extract files in an archive.",
    gif: "https://placehold.co/600x400/333/fff?text=tar",
    explanation: `<p>The <b>tar</b> command is used to create, view, and extract tar archives (also known as tarballs). It's often combined with compression like gzip.</p><ul><li><b>tar -czvf archive.tar.gz /path/to/dir</b>: Creates a compressed archive.</li><li><b>tar -xzvf archive.tar.gz</b>: Extracts a compressed archive.</li><li><b>tar -tvf archive.tar.gz</b>: Lists the contents of an archive without extracting it.</li></ul>`,
  },
  {
    name: "top",
    desc: "Display Linux processes.",
    gif: "https://placehold.co/600x400/333/fff?text=top",
    explanation: `<p>The <b>top</b> command provides a dynamic, real-time view of the running processes on your system. It's like a command-line Task Manager.</p><ul><li><b>top</b>: Starts the interactive process viewer.</li><li><b>Press 'q'</b>: While top is running, this quits the program.</li><li><b>Press 'M'</b>: Sorts processes by memory usage.</li></ul>`,
  },
  {
    name: "touch",
    desc: "Change file timestamps or create empty files.",
    gif: "https://placehold.co/600x400/333/fff?text=touch",
    explanation: `<p>The <b>touch</b> command is used to create an empty file if it doesn't exist, or to update the access and modification timestamps of an existing file.</p><ul><li><b>touch newfile.txt</b>: Creates an empty file named 'newfile.txt'.</li><li><b>touch existingfile.txt</b>: Updates the timestamp of 'existingfile.txt' to the current time.</li></ul>`,
  },
  {
    name: "uname",
    desc: "Print system information.",
    gif: "https://placehold.co/600x400/333/fff?text=uname",
    explanation: `<p>The <b>uname</b> command prints basic information about your system's name and the kernel it is running.</p><ul><li><b>uname</b>: Prints the kernel name (e.g., Linux).</li><li><b>uname -a</b>: Prints all available system information, including kernel version, hostname, and architecture.</li></ul>`,
  },
  {
    name: "wc",
    desc: "Print newline, word, and byte counts.",
    gif: "https://placehold.co/600x400/333/fff?text=wc",
    explanation: `<p>The <b>wc</b> (word count) command is used to count the number of lines, words, and characters in a file.</p><ul><li><b>wc filename.txt</b>: Shows lines, words, and byte count.</li><li><b>wc -l filename.txt</b>: Shows only the line count.</li><li><b>wc -w filename.txt</b>: Shows only the word count.</li></ul>`,
  },
  {
    name: "wget",
    desc: "Non-interactive network downloader.",
    gif: "https://placehold.co/600x400/333/fff?text=wget",
    explanation: `<p><b>wget</b> is a simple command-line utility for downloading files from the internet. It can run in the background, even if you log out.</p><ul><li><b>wget https://example.com/file.iso</b>: Downloads the specified file.</li><li><b>wget -c https://example.com/largefile.zip</b>: Continues a partially downloaded file.</li></ul>`,
  },
  {
    name: "whoami",
    desc: "Print effective user ID.",
    gif: "https://placehold.co/600x400/333/fff?text=whoami",
    explanation: `<p>The <b>whoami</b> command prints the username of the user who is currently logged into the system.</p><ul><li><b>whoami</b>: Simply running the command displays your username.</li></ul>`,
  },
];

// --- DYNAMIC CONTENT & EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("commandsGrid");
  const searchInput = document.getElementById("searchInput");
  const findCommandBtn = document.getElementById("findCommandBtn");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const htmlElement = document.documentElement;

  // --- Dark Mode Logic ---
  // Function to apply the saved theme
  const applyTheme = (theme) => {
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };

  // Check localStorage and apply the theme on page load
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Event listener for the toggle button
  darkModeToggle.addEventListener("click", () => {
    const isDark = htmlElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Populate the grid with command cards
  commands.forEach((command) => {
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
    // Add event listener directly to the button
    card.querySelector(".explain-btn").addEventListener("click", function () {
      getExplanation(command.name, this);
    });
    grid.appendChild(card);
  });

  // Set up Intersection Observer for card animations
  const cards = document.querySelectorAll(".command-card");
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

  cards.forEach((card) => {
    observer.observe(card);
  });

  // Add event listeners for search and AI finder
  searchInput.addEventListener("keyup", searchCommands);
  findCommandBtn.addEventListener("click", findCommand);
});

// --- FUNCTIONS ---

// Function to handle searching for commands
function searchCommands() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("command-card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h2")[0];
    if (title) {
      let textValue = title.textContent || title.innerText;
      if (textValue.toLowerCase().indexOf(input) > -1) {
        cards[i].style.display = "flex";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
}

// Function for the AI Command Finder
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
    // Call the secure Cloudflare function instead of the Gemini API directly
    const response = await fetch("/api/gemini-proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

// Function to get an explanation for a specific command
function getExplanation(commandName, buttonElement) {
  const explanationContainer = buttonElement.nextElementSibling;

  // If an explanation is already visible, hide it.
  if (explanationContainer.innerHTML.trim() !== "") {
    explanationContainer.innerHTML = "";
    return;
  }

  // Find the command in our data array
  const command = commands.find((c) => c.name === commandName);

  if (command && command.explanation) {
    const explanationBox = document.createElement("div");
    explanationBox.className = "explanation-box";
    explanationBox.innerHTML = command.explanation;

    explanationContainer.appendChild(explanationBox);

    // Trigger the animation for the box to appear
    setTimeout(() => {
      explanationBox.classList.add("visible");
    }, 10);
  } else {
    explanationContainer.innerHTML = `<div class="explanation-box visible text-yellow-800">Explanation not available.</div>`;
  }
}
// Function to toggle dark mode
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const isDark = htmlElement.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  // Apply the new theme
  if (newTheme === "dark") {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  // Save the theme preference in localStorage
  localStorage.setItem("theme", newTheme);
}
// Add event listener for the dark mode toggle button
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
// --- END OF DATA ---