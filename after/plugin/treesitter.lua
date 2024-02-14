require 'nvim-treesitter.install'.compilers = {'zig'}
require'nvim-treesitter.configs'.setup {
  sync_install = false,

  ensure_installed = {"tsx", "rust" , "json","javascript","c","lua","typescript" , "vim", "vimdoc", "query" },

  auto_install = true,


 highlight = {
   enable = true,

    additional_vim_regex_highlighting = false,
   }
  ,
 }


