# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: c3b5aw <dev@c3b5aw.dev>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/10/18 14:23:36 by c3b5aw            #+#    #+#              #
#    Updated: 2021/10/24 23:54:43 by c3b5aw           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM	alpine:3.13

RUN		apk update
RUN		apk add --no-cache --quiet --update bash curl less
RUN		apk add --no-cache --quiet --update mariadb-client redis
RUN		apk add --no-cache --quiet --update php7 php7-phar \
			php7-json php7-curl php7-fpm php7-mysqli php7-iconv

RUN		mkdir -p /var/www/wordpress /usr/local/bin/wp

# https://wp-cli.org/
RUN		curl https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
			--output /usr/bin/wp --silent
RUN		chmod +x ./usr/bin/wp

# https://wordpress.org/download/releases/
RUN		wp core download --version=5.8.1 --path=/var/www/wordpress
WORKDIR /var/www/wordpress


COPY	config/wp-config /config/wp-config
COPY	./scripts/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN		chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT [ "sh", "/usr/local/bin/entrypoint.sh" ]