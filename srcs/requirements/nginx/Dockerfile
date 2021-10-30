# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: c3b5aw <dev@c3b5aw.dev>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/10/18 14:23:38 by c3b5aw            #+#    #+#              #
#    Updated: 2021/10/24 21:14:21 by c3b5aw           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM	alpine:3.13

RUN		apk update
RUN		apk add --no-cache --quiet --update nginx
RUN		apk add --no-cache --quiet --update openssl

RUN		mkdir -p /etc/nginx/ssl
# SUBJ opts: https://www.ibm.com/docs/en/ibm-mq/7.5?topic=certificates-distinguished-names
RUN 	openssl req -x509 -nodes \
	-out /etc/nginx/ssl/c3b5aw.42.fr.crt \	
	-keyout /etc/nginx/ssl/c3b5aw.42.fr.key \
	-subj "/C=FR/ST=IDF/L=Paris/O=42/OU=42/CN=c3b5aw.42.fr/UID=c3b5aw"

RUN 	mkdir -p /var/run/nginx
COPY	config/nginx.conf /etc/nginx/conf.d/default.conf

RUN		ln -sf /dev/stdout /var/log/nginx/access.log \
			&& ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE	443

CMD	[ "nginx", "-g", "daemon off;" ]
