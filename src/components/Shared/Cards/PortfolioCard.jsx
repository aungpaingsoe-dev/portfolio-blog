import React from 'react'
import Men from "/images/default/men.jpg";

const PortfolioCard = () => {
    return (
        <div>
            <div class="container cursor-pointer">
                <div class="content">
                    <div class="content-overlay"></div>
                    <img class="content-image h-[400px] object-center object-cover shadow-md border border-slate-200 "
                        src={ Men } alt="" />
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard