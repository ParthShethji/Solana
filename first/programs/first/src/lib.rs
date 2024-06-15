use anchor_lang::prelude::*;

declare_id!("z2pvAcWzBL3KgptqswvywX2mi7FR3eQwoECGrfTJiDB");

#[program]
pub mod first {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
