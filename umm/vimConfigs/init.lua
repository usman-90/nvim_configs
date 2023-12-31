vim.wo.scrolloff = 15
vie.wo.number = true
vim.wo.relativenumber = true
vim.g.tabstop = 4
vim.g.softtabstop = 4
vim.g.shiftwidth = 4
vim.g.expandtab = true
vim.g.smartindent = true
vim.g.updatetime=50
vim.g.termguicolors = true

vim.g.mapleader = ' '

vim.api.nvim_set_keymap('n', '<leader>pv', ':Vex<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader><CR>', ':so C:/Users/Hp Laptop/AppData/Local/nvim/init.lua<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader>k', '<C-^>', { noremap = true })
vim.api.nvim_set_keymap('i', 'jj', '<C-c>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader>f', ':Ex<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '+', '$', { noremap = true })
vim.api.nvim_set_keymap('v', '+', '$', { noremap = true })
vim.api.nvim_set_keymap('v', '<leader>y', '"+y', { noremap = true })
vim.api.nvim_set_keymap('v', 'J', ':m \'>+1<CR>gv=gv', { noremap = true })
vim.api.nvim_set_keymap('v', 'K', ':m \'<-2<CR>gv=gv', { noremap = true })
vim.api.nvim_set_keymap('i', '<C-s>', '<esc>:w<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<C-s>', ':w<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader>x', ':Format<CR>', { noremap = true })
vim.api.nvim_set_keymap('i', '<leader>x', ':Format<CR>', { noremap = true })
vim.api.nvim_set_keymap('i', '{', '{}<Left>', { noremap = true })
vim.api.nvim_set_keymap('i', '(', '()<Left>', { noremap = true })
vim.api.nvim_set_keymap('i', '[', '[]<Left>', { noremap = true })
vim.api.nvim_set_keymap('i', '"', '""<Left>', { noremap = true })
vim.api.nvim_set_keymap('n', '<C-d>', '<C-d>zz', { noremap = true })
vim.api.nvim_set_keymap('n', '<C-u>', '<C-u>zz', { noremap = true })


vim.cmd('call plug#begin(\'C:/Users/Hp Laptop/AppData/Local/nvim-data/plugged\')')

vim.cmd('Plug \'neoclide/coc.nvim\', {\'branch\': \'release\'}')
vim.cmd('Plug \'rose-pine/neovim\', {\'as\': \'plugin-name\'}')
vim.cmd('Plug \'nvim-treesitter/nvim-treesitter\'')
vim.cmd('Plug \'nvim-lua/plenary.nvim\'')
vim.cmd('Plug \'nvim-telescope/telescope.nvim\', { \'tag\': \'0.1.3\' }')
vim.cmd('Plug \'ThePrimeagen/harpoon\'')


vim.cmd('call plug#end()')

vim.cmd('colorscheme rose-pine')

local keyset = vim.keymap.set

function _G.check_back_space()
    local col = vim.fn.col('.') - 1
    return col == 0 or vim.fn.getline('.'):sub(col, col):match('%s') ~= nil
end

local opts = {silent = true, noremap = true, expr = true, replace_keycodes = false}
keyset("i", "<TAB>", 'coc#pum#visible() ? coc#pum#next(1) : v:lua.check_back_space() ? "<TAB>" : coc#refresh()', opts)
keyset("i", "<S-TAB>", [[coc#pum#visible() ? coc#pum#prev(1) : "\<C-h>"]], opts)
keyset("i", "<cr>", [[coc#pum#visible() ? coc#pum#confirm() : "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"]], opts)
vim.api.nvim_create_user_command("Format", "call CocAction('format')", {})

vim.api.nvim_set_hl(0,"Normal",{
    bg = "none"
})


vim.api.nvim_set_hl(0,"NormalFloat",{
    bg = "none"
})


-- TREE SITTER CONFIGS 
require 'nvim-treesitter.install'.compilers = {'zig'}
--require("nvim-treesitter.install").prefer_git = true
require'nvim-treesitter.configs'.setup {
 --A list of parser names, or "all" (the five listed parsers should always be installed)

 --Install parsers synchronously (only applied to `ensure_installed`)
  sync_install = false,

  ensure_installed = { "json","javascript","c","lua","typescript" , "vim", "vimdoc", "query" },
  -- Automatically install missing parsers when entering buffer
  -- Recommendation: set to false if you don't have `tree-sitter` CLI installed locally
  auto_install = true,



 highlight = {
   enable = true,

    additional_vim_regex_highlighting = false,
   }
  ,
 }


 -- Telescope configs
local builtin = require('telescope.builtin')
vim.keymap.set('n', '<leader>p', builtin.find_files, {})
vim.keymap.set('n', '<leader>g', builtin.git_files, {})
vim.keymap.set('n', '<leader>ps', function()
	builtin.grep_string({ search = vim.fn.input("Grep > ")});
end)



-- React Boiler plate
    vim.api.nvim_create_user_command('R',
      function(opts)
	      local str1 = "const " .. opts.fargs[1] .. "= () => {"
	      local str2 = "export default " .. opts.fargs[1] .. ";"
	      vim.api.nvim_buf_set_lines(vim.api.nvim_get_current_buf(), 0, 0, true, {str1,"return ()","}",str2})
	      vim.api.nvim_win_set_cursor(0, {2, 7})
      end,
      { nargs = 1 })



-- HTML Boiler plate
    vim.api.nvim_create_user_command('H',
      function()
	       local html_boilerplate = {
        "<!DOCTYPE html>",
        "<html lang='en'>",
        "<head>",
        "    <meta charset='UTF-8'>",
        "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "    <title>Document</title>",
        "</head>",
        "<body>",
        "</body>",
        "</html>"
    }

	      vim.api.nvim_buf_set_lines(vim.api.nvim_get_current_buf(), 0, 0, true, html_boilerplate)
	      vim.api.nvim_win_set_cursor(0, {8, 7})
      end,
      { nargs = 0 })





-- Harpoon configs

local mark = require("harpoon.mark ")
local ui = require("harpoon.ui ")

vim.keymap.set("n", "<leader>a", mark.add_file)
vim.keymap.set("n", "<C-e>", ui.toggle_quick_menu)

vim.keymap.set("n", "<C-h>", function() ui.nav_file(1) end)
vim.keymap.set("n", "<C-t>", function() ui.nav_file(2) end)
vim.keymap.set("n", "<C-n>", function() ui.nav_file(3) end)
vim.keymap.set("n", "<C-s>", function() ui.nav_file(4) end)



