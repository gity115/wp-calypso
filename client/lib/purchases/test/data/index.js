/** @format */
export const DOMAIN_PURCHASE = {
	expiryStatus: 'active',
	id: 10001,
	isDomainRegistration: true,
	meta: 'foo.com',
	productName: 'Domain Registration',
	productSlug: 'domain_reg',
	isRefundable: true,
	isCancelable: true,
};

export const DOMAIN_PURCHASE_PENDING_TRANSFER = {
	expiryStatus: 'active',
	id: 10001,
	isDomainRegistration: true,
	meta: 'foo.com',
	productName: 'Domain Registration',
	productSlug: 'domain_reg',
	pendingTransfer: true,
};

export const DOMAIN_PURCHASE_EXPIRED = Object.assign( {}, DOMAIN_PURCHASE, {
	expiryStatus: 'expired',
	id: 10002,
	isCancelable: false,
} );

export const DOMAIN_PURCHASE_INCLUDED_IN_PLAN = Object.assign( {}, DOMAIN_PURCHASE, {
	id: 10004,
	expiryStatus: 'included',
} );

export const DOMAIN_MAPPING_PURCHASE = {
	expiryStatus: 'active',
	id: 20001,
	isDomainRegistration: false,
	meta: 'boo.com',
	productName: 'Domain Mapping',
	productSlug: 'domain_map',
	isCancelable: true,
};

export const DOMAIN_MAPPING_PURCHASE_EXPIRED = Object.assign( {}, DOMAIN_MAPPING_PURCHASE, {
	expiryStatus: 'expired',
	id: 20002,
	isCancelable: false,
} );

export const SITE_REDIRECT_PURCHASE = {
	expiryStatus: 'active',
	id: 30001,
	isDomainRegistration: false,
	meta: '',
	productName: 'Site Redirect',
	productSlug: 'offsite_redirect',
	isCancelable: false,
};

export const SITE_REDIRECT_PURCHASE_EXPIRED = Object.assign( {}, SITE_REDIRECT_PURCHASE, {
	expiryStatus: 'expired',
	id: 30002,
} );

export const PLAN_PURCHASE = {
	expiryStatus: 'active',
	id: 40001,
	meta: '',
	productName: 'WordPress.com Premium',
	productSlug: 'value_bundle',
	isRefundable: true,
	isCancelable: true,
	isRenewable: true,
	isDomainRegistration: false,
};

export const PLAN_PURCHASE_WITH_CREDITS = {
	id: 4002,
	payment: {
		type: 'credits',
		countryCode: 'US',
		countryName: 'United States',
	},
	productId: 2006,
	productName: 'Personal',
	productSlug: 'jetpack_personal_monthly',
};

export const PLAN_PURCHASE_WITH_PAYPAL = {
	id: 4003,
	payment: {
		type: 'paypal',
	},
	productId: 2006,
	productName: 'Personal',
	productSlug: 'jetpack_personal_monthly',
};
