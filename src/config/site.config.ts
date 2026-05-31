// src/config/site.config.ts

export const siteConfig = {
  // Global Branding & SEO
  author: "Joao Vitor Fogaca de Oliveira",         // Used in meta tags
  title: "fajre@shellfolio:~$", // Browser tab title
  description: "Infrastructure & DevOps Engineer. I use Nix, btw.",
  siteUrl: "https://fajre.pages.dev", // Used for OpenGraph
  metaImage: "/og-image.png", // Placed in public/ directory

  themeColor: "#4af626",

  // Custom Prompt
  prompt: {
    user: "fajre",
    host: "shellfolio",
  },

  // Feature Toggles (Enable/Disable sections)
  features: {
    fastfetch: true,
    about: true,
    experiences: true,
    projects: true,
    education: true,
    skills: true,
    remotes: true,
    contact: true,
    wallets: true,   // Set to false by default for generic users
    torMirror: true, // Set to false by default for generic users
  },

  // Sensitive/Specific Data
  onionAddress: "4pxhc3ncqn22tbcp3ohvavuwhcggfrsbyshvqodlraayxudpzi6bvdyd.onion",

  // Fastfetch ASCII Art (Use raw string template)
  asciiArt: `
  		':;;:;;;;;;:;;;:::;
             ,c:,'.............',;;;;;::;
           .l,,.........................,c.
         ,lc;'............................,;
       c::;'...............................,c
      :,''.......'''........................':'
     :''....,coodddol:,......................';,
     ;....:oxkkkkkkxxxdlc,....................';
    .,..,okkOOOOOOkkkkxxxddol:;'....  .........,
    ''.,dOOOOOOOOOOOkkkkxxxddolc::;,... .......'
    .'.ckOOOOOOOOkkkkkkkxkxddoolcc:;;,'........'
     :,dOOOOOOOOOkOkkkkkkkxxdoolcc::;;,.........
      ckOxooolloodxkOOOOkdoc::;:::::;;;;,.......
      co;,''..';;:ldxxxdl,...........',,;;.....
      ldolcccc;;;codxdl:,....',,'''...',;;''...,
     xkxoc;;;...';lxOxl'...,c,......''',;;;,'',::
     xOkxxxll:;:coxkkdc,'';:c:;,,''',;;,;;;,,,,.,
     l0OkkkxxddxxkOOxo:,,;:llllllclc::;;;;;,.','.
     ;0OOOOOkkkkkOOOxoc;,;codxxxxdol::;;;;,,..'.
      k0OOOOkxxkO00Odl:;:;,:odxxddol:;,,,,'''''
      cOkkkxodxkxodd:,..'..':cooolc:,,,,'..,,,
      ckxddlodxoc;;;'......',;::c:;,'''....,
      ;oxd:'.',,....,,...........;,'.......
      .;cl'..,:;:::cc:;,........ .........
       '';,':xxxxxxdoolc;,,,;:;...........
       ...'';dkxoc:,'''''',::;'......  ...
       .....':okdlc;''',;;;,'...        ..
        ......,;,,;,;,,''.....         ...
         . ...............            ..,.
          .....   .   .              ..',;
           ..  .                   ...'',;;
            :'..                 .....'',;:c.
            dxl'...          ........''',,;;:c;,,.
           .xkkkxol;,...............'''',,;;'.....;'
         .;lOOOOkkxdlc:;;,''',,''''',,,,,'..    .....';
      .,;,'xOOOkkkkxxdolc::cc::;;;;;;,..           .....',,
    ,;'.''.oOOOkkkkxxdolccclccc::::,.              ........'.`
};
