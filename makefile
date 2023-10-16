#  ${NEXUS_IP}
NEXUS_IP = 10.78.115.60

hostname:
	hostname -I | awk '{print$1}'
	pwd

run_tests:
	pip install poetry
	poetry config virtualenvs.create false
	poetry install
	pytest .

docker-build:
	cp /home/.npmrc ./
	docker build  -t ${NEXUS_IP}:8083/${CI_PROJECT_NAME}:${CI_PIPELINE_ID}-${CI_COMMIT_SHORT_SHA} . -f Dockerfile.kuber

docker-push:
	docker push ${NEXUS_IP}:8083/${CI_PROJECT_NAME}:${CI_PIPELINE_ID}-${CI_COMMIT_SHORT_SHA}

pod-deploy:
	if test -f configmap.yaml; then cp configmap.yaml /home/gitlab-jobs/dev-kuber/Charts/${CI_PROJECT_NAME}/templates;else echo "No configmap exported";fi
	/home/gitlab-jobs/dev-kuber/scripts/deploy.sh

script:
	sleep 40
	cp /home/tellega.py ./
	chmod u+x tellega.py
	kubectl get po  -n week-week -o wide | grep ${CI_PROJECT_NAME}
	if \
	kubectl get po  -n week-week -o wide | grep ${CI_PROJECT_NAME} | sort -k 3 | head -1 | awk '{print$3}' | grep CrashLoopBackOff; \
	then \
		python3 tellega.py ${CI_PROJECT_NAME} ${CI_COMMIT_TIMESTAMP} ${CI_PROJECT_URL} ${GITLAB_USER_LOGIN} ${CI_COMMIT_TITLE} $CI_COMMIT_REF_NAME CrashLoopBackOff; \
		exit 1; fi
