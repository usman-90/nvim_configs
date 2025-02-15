vim.g.mapleader = ' '

vim.api.nvim_set_keymap('n', '<leader>pv', ':Vex<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader><CR>', ':so C:/Users/siddi/AppData/Local/nvim/init.lua<CR>', { noremap = true })
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
vim.api.nvim_set_keymap('i', '{', '{}<Left>', { noremap = true })
vim.api.nvim_set_keymap('i', '(', '()<Left>', { noremap = true })
vim.api.nvim_set_keymap('i', '[', '[]<Left>', { noremap = true })
vim.api.nvim_set_keymap('i', '"', '""<Left>', { noremap = true })
vim.api.nvim_set_keymap('n', '<C-d>', '<C-d>zz', { noremap = true })
vim.api.nvim_set_keymap('n', '<C-u>', '<C-u>zz', { noremap = true })
vim.api.nvim_set_keymap('n', '<C-u>', '<C-u>zz', { noremap = true })

vim.api.nvim_set_keymap('x', '<Leader>c', [[:s/^/\/\//<CR>]], { noremap = true })
vim.api.nvim_set_keymap('x', '<Leader>u', [[:s/^\/\///<CR>]], { noremap = true })

vim.wo.scrolloff = 15
vim.wo.number = true
vim.wo.relativenumber = true
vim.g.softtabstop = 4
vim.g.expandtab = true
vim.g.smartindent = true
vim.g.updatetime=50
vim.g.termguicolors = true
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.swapfile = false
vim.opt.backup = false
vim.opt.undodir = 'C:/Users/siddi/AppData/Local/nvim/undodir'
vim.opt.undofile = true
vim.opt.hlsearch = false
vim.opt.incsearch = true


return {}

