local lsp_zero = require('lsp-zero')
lsp_zero.preset("recommended")
lsp_zero.on_attach(function(client, bufnr)
  -- see :help lsp-zero-keybindings
  -- to learn the available actions
  lsp_zero.default_keymaps({buffer = bufnr})
end)

-- to learn how to use mason.nvim with lsp-zero
-- read this: https://github.com/VonHeikemen/lsp-zero.nvim/blob/v3.x/doc/md/guides/integrate-with-mason-nvim.md

local cmp = require('cmp')
local cmp_action = require('lsp-zero').cmp_action()

cmp.setup({
  mapping = cmp.mapping.preset.insert({
    -- `Enter` key to confirm completion
    ['<CR>'] = cmp.mapping.confirm({select = false}),

    -- Ctrl+Space to trigger completion menu
    ['<Tab>'] = cmp.mapping.complete(),

    -- Navigate between snippet placeholder
    ['<Tab>'] = cmp_action.luasnip_jump_forward(),
    ['<S-Tab>'] = cmp_action.luasnip_jump_backward(),

    -- Scroll up and down in the completion documentation
    ['<C-u>'] = cmp.mapping.scroll_docs(-4),
    ['<C-d>'] = cmp.mapping.scroll_docs(4),
  })
})
			





require('mason').setup({})
require('mason-lspconfig').setup({
  ensure_installed = {
	"lua_ls",
	"rust_analyzer",
	"tsserver"
  },
  handlers = {
    lsp_zero.default_setup,
  },
})


-- lsp keybindings
-- gd - go to definition
-- K - show hover
-- <F3> - format
-- <F4> -code action
-- [d - go to previous diagnostic
-- ]d - go to next diagnostic



