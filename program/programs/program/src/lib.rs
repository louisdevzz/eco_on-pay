use anchor_lang::prelude::*;

pub mod constant;
pub mod states;

use crate::{constant::*,states::*};

declare_id!("9p7wYZoehkiuqbDumiN9tYZANnWhB1CNMLq31B9zfft2");

#[program]
pub mod product {
    use super::*;

    pub fn init_user(ctx: Context<InitUser>, name: String, avatar: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        user_account.name = name;
        user_account.avatar = avatar;
        user_account.role = "user".parse().unwrap();
        user_account.authority = authority.key();

        Ok(())
    }

    pub fn init_seller(ctx: Context<InitSeller>, name_shop: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        let seller_account = &mut ctx.accounts.seller_account;
        let authority = &mut ctx.accounts.authority;

        seller_account.user = user_account.key();
        seller_account.name = user_account.name.clone();
        seller_account.avatar = user_account.avatar.clone();
        seller_account.name_shop = name_shop;
        seller_account.role = "seller".parse().unwrap();
        seller_account.last_product_id = 0;
        seller_account.product_count = 0;
        seller_account.authority = authority.key();

        Ok(())
    }

    pub fn create_product(
        ctx: Context<CreateProduct>,
        title: String,
        about: String,
        price: String,
        color: String,
        images: String,
        category: String,
        size: String,
        quanlity: String,
        votes: String,
    ) -> Result<()> {
        let product_account = &mut ctx.accounts.product_account;
        let seller_account = &mut ctx.accounts.seller_account;
        let authority = &mut ctx.accounts.authority;

        product_account.id = seller_account.last_product_id;
        product_account.user = seller_account.key();
        product_account.authority = authority.key();
        product_account.title = title;
        product_account.about = about;
        product_account.price = price;
        product_account.color = color;
        product_account.images = images;
        product_account.category = category;
        product_account.size = size;
        product_account.quanlity = quanlity;
        product_account.votes = votes;

        seller_account.last_product_id = seller_account.last_product_id.checked_add(1).unwrap();
        seller_account.product_count = seller_account.product_count.checked_add(1).unwrap();
        Ok(())
    }

}

#[derive(Accounts)]
#[instruction()]
pub struct InitUser<'info> {
    #[account(
        init,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 2312 + 8,
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct InitSeller<'info> {
    #[account(
        init,
        seeds = [SELLER_SEED, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 2917 + 8,
    )]
    pub seller_account: Account<'info, SellerAccount>,

    #[account(
        mut,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct CreateProduct<'info> {
    #[account(
        init,
        seeds = [PRODUCT_SEED, authority.key().as_ref(), &[seller_account.last_product_id as u8].as_ref()],
        bump,
        payer = authority,
        space = 8790 + 8 + 259 + 259,
    )]
    pub product_account: Account<'info, ProductAccount>,

    #[account(
        mut,
        seeds = [SELLER_SEED, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub seller_account: Account<'info, SellerAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}
