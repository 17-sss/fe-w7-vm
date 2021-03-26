import ProductModel from './models/ProductModel.js';
import WalletModel from './models/WalletModel.js';
import ProductView from './views/ProductView.js';
import WalletView from './views/WalletView.js';
import ProgressView from './views/ProgressView.js';

const REFERENCE = {
    product: {
        productWrapSelector: '#productWrapper',
        productItemBtnSelector: '#productItem',
    },
    wallet: {
        walletWrapSelector: '#walletWrapper',
        budgetTotalSelector: '#budgetContainer',

        // 임시 (ProgressView 관련)
        progressWrapSelector: '#progressWrapper',
        inputMoneyStatusSelector: '.progress-current-value',
        progressStatusSelector : '.progress-current-status',
        returnMoneyBtnSelector: '#returnBtn'
        //--------
    },
    progress: {
        progressWrapSelector: '#progressWrapper',
        inputMoneyStatusSelector: '.progress-current-value',
        progressStatusSelector : '.progress-current-status',
        returnMoneyBtnSelector: '#returnBtn'
    },
};

const init = () => {
    const productModel = new ProductModel();
    const walletModel = new WalletModel();
    // 임시. 리팩토링 시 구조 바꿔야함!
    const productView = new ProductView(productModel, walletModel, REFERENCE.product);
    new WalletView(walletModel, REFERENCE.wallet, productView);
    // ----
    new ProgressView(walletModel, REFERENCE.progress);
};

init();
