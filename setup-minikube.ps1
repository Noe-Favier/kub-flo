echo "##########################################"
winget install Kubernetes.minikube
echo "##########################################"
minikube config set driver docker
echo "##########################################"
minikube delete
echo "##########################################"
minikube start --vm-driver=docker

echo "##########################################"
kubectl cluster-info
echo "##########################################"
echo ""
echo "FINI ! "
echo ""