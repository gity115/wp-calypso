/** @format */

/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import {
	ButtonRow,
	Continue,
	makeTour,
	Quit,
	SiteLink,
	Step,
	Tour,
} from 'layout/guided-tours/config-elements';

export const JetpackMonitoringTour = makeTour(
	<Tour name="jetpackMonitoring" version="20180611">
		<Step
			name="init"
			target=".jetpack-monitor-settings .form-toggle__switch"
			arrow="top-left"
			placement="below"
			style={ {
				animationDelay: '0.7s',
				zIndex: 1,
			} }
		>
			{ ( { translate } ) => (
				<Fragment>
					<p>
						{ translate(
							"Let's enable monitoring of your site's uptime " +
								'by activating the toggle switch for Jetpack Monitor.'
						) }
					</p>
					<ButtonRow>
						<Continue
							target=".jetpack-monitor-settings .form-toggle__switch"
							step="finish"
							click
							hidden
						/>
						<SiteLink href="/checklist/:site">{ translate( 'Return to the checklist' ) }</SiteLink>
					</ButtonRow>
				</Fragment>
			) }
		</Step>

		<Step name="finish" placement="right">
			{ ( { translate } ) => (
				<Fragment>
					<h1 className="tours__title">
						<span className="tours__completed-icon-wrapper">
							<Gridicon icon="checkmark" className="tours__completed-icon" />
						</span>
						{ translate( 'Excellent, you’re done!' ) }
					</h1>
					<p>
						{ translate(
							'Downtime Monitoring has been enabled. Would you like to continue setting up the security essential features for your site?'
						) }
					</p>
					<ButtonRow>
						<SiteLink isButton href={ '/checklist/:site' }>
							{ translate( "Yes, let's do it." ) }
						</SiteLink>
						<Quit>{ translate( 'No thanks.' ) }</Quit>
					</ButtonRow>
				</Fragment>
			) }
		</Step>
	</Tour>
);
