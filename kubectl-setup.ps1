kubectl apply -f .\module\orderModule\order-deployement.yaml
kubectl apply -f module\productModule\product-deployment.yaml
kubectl apply -f module\userModule\user-deployment.yaml

kubectl apply -f .\module\orderModule\order-service.yaml
kubectl apply -f module\productModule\product-service.yaml
kubectl apply -f module\userModule\user-service.yaml

kubectl apply -f .\Secret\dotfile-secret.yaml