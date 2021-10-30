/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Introduction.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: c3b5aw <dev@c3b5aw.dev>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/10/18 16:01:35 by c3b5aw            #+#    #+#             */
/*   Updated: 2021/10/21 19:57:44 by c3b5aw           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme : Theme) => ({
	introduction: {
		textAlign: 'center',
		marginTop: 100,
		marginBottom: 50,
		'& > h3': {
			fontWeight: 600,
		}
	},
	statsContainer: {
		marginTop: 75,
		backgroundColor: theme.palette.background.default,
	},
}));

export function Introduction() {
	const	badge_url 	= 'https://badge42.herokuapp.com/api/stats/';
	const	login 		= 'c3b5aw';
	const	opts		= '';

	const cls = useStyles();

	return (
		<Container maxWidth="md" className={ cls.introduction }>
			<Typography variant="h3">
				Hello,
			</Typography>
			<Typography>
				My login is c3b5aw
			</Typography>
			<Paper className={ cls.statsContainer } elevation={0}>
				<img
					src={ badge_url + login + opts }
					alt="42badge stats"
				/ >					
			</Paper>
		</Container>
	)
}
