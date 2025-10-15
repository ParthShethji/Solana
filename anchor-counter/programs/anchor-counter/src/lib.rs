use anchor_lang::prelude::*;

declare_id!("9KUKcrsvwDXP3amf2RDocMoos6VW7pdKDHSs8PJFztQN");

#[program]
pub mod anchor_counter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count = 0;
        counter.bump = ctx.bumps.counter;
        msg!("Counter Account Created");
        msg!("Current Count: {}", counter.count);
        Ok(())
    }

    pub fn update(ctx: Context<Update>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count += 1;
        msg!("Counter incremented. Current count: {}", counter.count);
        Ok(())
    }
}
//  Define the accounts involved in the instructions
//  These are the format the payload is expected to be in
#[derive(Accounts)]
pub struct Initialize<'info> {
    // creating account counter if it doesn't exist
    #[account(init,
        payer = user,
        seeds =[b"counter"],
        bump,
        space = DISCRIMINATOR + Counter::INIT_SPACE)]
    pub counter: Account<'info, Counter>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
//  Define the accounts involved in the instructions
//  These are the format the payload is expected to be in
#[derive(Accounts)]
pub struct Update<'info> {
    #[account(
        mut,
        seeds = [b"counter"],
        bump = counter.bump,
    )]
    pub counter: Account<'info, Counter>,
    pub user: Signer<'info>,
}

// Define the Counter account structure
#[account]
#[derive(InitSpace)]
pub struct Counter {
    pub count: u64,
    pub bump: u8,
}

const DISCRIMINATOR: usize = 8;
