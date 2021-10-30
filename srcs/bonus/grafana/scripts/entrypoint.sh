# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    entrypoint.sh                                      :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: c3b5aw <dev@c3b5aw.dev>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/10/25 14:09:19 by c3b5aw            #+#    #+#              #
#    Updated: 2021/10/25 14:51:40 by c3b5aw           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

sed -i "s/PROMETHEUS_PORT/$PROMETHEUS_PORT/g" /monitor/grafana/conf/provisioning/datasources/prometheus.yml

./bin/grafana-server