# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: c3b5aw <dev@c3b5aw.dev>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/10/18 14:23:42 by c3b5aw            #+#    #+#              #
#    Updated: 2021/10/24 22:00:40 by c3b5aw           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM	alpine:3.13

RUN		apk update
RUN		apk add --no-cache --quiet --update redis

COPY	./scripts/entrypoint.sh ./entrypoint.sh
RUN		chmod +x ./entrypoint.sh

ENTRYPOINT [ "sh", "./entrypoint.sh" ]